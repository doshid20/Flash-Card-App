import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { createCard, updateCard } from "../utils/api/index";

function CardForm(props) {
  const { front = "", back = "", isNotNew = false } = props;

  /** Initialize form data */
  const initialData = {
    front: "",
    back: "",
  };

  const [formData, setFormData] = useState({ ...initialData });
  const { deckId, cardId } = useParams();
  const history = useHistory();
  

  useEffect(() => {
    if (isNotNew) {
      setFormData((currentData) => {
        return {
          ...currentData,
          front,
          back,
        };
      });
    }
  }, [back, front, isNotNew]);

  const handleChange = async(event) => {
    const newData = {
      ...formData,
      [event.target.name]: event.target.value,
    };

    setFormData(newData);
  };

  /**
   * submit form
   * @param {*} event 
   */
  const handleSubmitCard = async (event) => {
    event.preventDefault();
    // api to update card
    if (isNotNew) {
      await updateCard({
        ...formData,
        id: Number (cardId),
        deckId: Number (deckId),
      });

      setFormData({ ...initialData });

      history.push(`/decks/${deckId}`);
    } else {
      // api to create card
      await createCard(deckId, { ...formData });
      setFormData({ ...initialData });
      alert("Pls click on Done button once all cards are added");
    }
  };

  return (
    <form onSubmit={handleSubmitCard}>
      <div className="mb-2 mt-2">
        <label htmlFor="front" className="form-label">
          Front
        </label>
        <textarea
          className="form-control"
          id="front"
          name="front"
          aria-describedby="inputfront"
          onChange={handleChange}
          value={formData.front}
          placeholder="Front Card"
        />
      </div>
      <div className="mb-2 mt-2">
        <label htmlFor="back" className="form-label">
          Back
        </label>
        <textarea
          className="form-control"
          id="back"
          name="back"
          aria-describedby="inputback"
          onChange={handleChange}
          value={formData.back}
          placeholder="Back Card"
        />
      </div>

      <Link to={`/decks/${deckId}`} className="btn btn-secondary mr-2">
        Done
      </Link>
      <button type="submit" className="btn btn-primary mr-2">
        Save
      </button>
    </form>
  );
}

export default CardForm;
