import React from "react";
import { Link } from "react-router-dom";

/**
 * Deck display
 * @param {} props 
 * @returns 
 */
function Deck(props) {
  const { id, name, description, cards, handleDeleteDeck } = props;

  return (
    <li className="list-group-item">
      <div className="row justify-content-between px-4">
        <h3>{name}</h3>
        <p>{cards.length} cards</p>
      </div>
      <div className="row justify-content-between px-4">
        <p>{description}</p>
      </div>
      <div className="row justify-content-between px-4">
        <div>
          <Link className="btn btn-secondary mr-2" to={`/decks/${id}`}>
            View
          </Link>
          <Link className="btn btn-primary mr-2" to={`/decks/${id}/study`}>
            Study
          </Link>
        </div>
        <div>
          <button
            className="btn btn-danger mr-2"
            onClick={() => handleDeleteDeck(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
export default Deck;
