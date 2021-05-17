import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { updateDeck } from "../utils/api";
/**
 * update deck from api
 * @param {} props
 * @returns
 */

function DeckEdit({ name = "", description = "" }) {
  const initialFormData = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const { deckId } = useParams();
  const history = useHistory();

  useEffect(() => {
    setFormData({
      name,
      description,
    });
  }, [description, name]);

  const handleChange = (event) => {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };

    setFormData(newFormData);
  };

  const handleSubmitDeckEdit = async (event) => {
    event.preventDefault();

    await updateDeck({ ...formData, id: deckId });

    history.goBack();
  };

  return (
    <form onSubmit={handleSubmitDeckEdit}>
      <div className="mb-2 mt-2">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          id="name"
          name="name"
          aria-describedby="nameFormInput"
          onChange={handleChange}
          value={formData.name}
          placeholder="Edit Deck Name"
        />
      </div>
      <div className="mb-2 mt-2">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          aria-describedby="descriptionFormInput"
          onChange={handleChange}
          value={formData.description}
          placeholder="Edit Deck Description"
        />
      </div>

      <Link to={`/decks/${deckId}`} className="btn btn-secondary mr-2">
        Cancel
      </Link>
      <button type="submit" className="btn btn-primary mr-2">
        Submit
      </button>
    </form>
  );
}

export default DeckEdit;
