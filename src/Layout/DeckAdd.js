import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { createDeck } from "../utils/api";
/**
 * Create deck using api
 * @param {*} props
 * @returns
 */
function DeckAdd(props) {
  const initialFormData = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState({ ...initialFormData });
  const history = useHistory();

  const handleChange = (event) => {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };

    setFormData(newFormData);
  };

  const handleSubmitDeck = async (event) => {
    event.preventDefault();

    const result = await createDeck({ ...formData });

    history.push(`/decks/${result.id}`);
  };

  return (
    <form onSubmit={handleSubmitDeck}>
      <div className="mb-2 mt-2">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          id="name"
          name="name"
          type="text"
          aria-describedby="inputname "
          onChange={handleChange}
          value={formData.name}
          placeholder="Add Deck Name"
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
          aria-describedby="inputdescription"
          onChange={handleChange}
          value={formData.description}
          placeholder="Add Deck Description"
        />
      </div>

      <Link to="/" className="btn btn-secondary mr-2">
        Cancel
      </Link>
      <button type="submit" className="btn btn-primary mr-2">
        Submit
      </button>
    </form>
  );
}

export default DeckAdd;
