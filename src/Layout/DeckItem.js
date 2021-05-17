import React from "react";
import { Link, useParams } from "react-router-dom";
/**
 * Display deck items
 * @param {*} props 
 * @returns 
 */
function DeckItem(props) {
  const { name, description, handleDeleteDeck } = props;
  const { deckId } = useParams();

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>

      <div className="justify-content-start">
        <div>
          <Link to={`/decks/${deckId}/edit`} className="btn btn-secondary mr-2">
            Edit
          </Link>
          <Link to={`/decks/${deckId}/study`} className="btn btn-primary mr-2">
            Study
          </Link>
          <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary mr-2">
            +Add Cards
          </Link>
        </div>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-danger mr-2"
            onClick={() => handleDeleteDeck(deckId)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeckItem;
