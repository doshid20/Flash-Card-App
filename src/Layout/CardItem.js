import React from "react";
import { Link, useParams } from "react-router-dom";
/**
 * Display Card Items
 * @param {} props 
 * @returns 
 */
function CardItem(props) {
  const { card:{front, back, id}, handleDeleteCard } = props;
  const { deckId } = useParams();

  return (
    <li className="list-group-item ">
      <div className="row">
        <div className="col">
          <p>{front}</p>
        </div>
        <div className="col">
          <p>{back}</p>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-end">
          <Link
            to={`/decks/${deckId}/cards/${id}/edit`}
            className="btn btn-secondary mr-2"
          >
            Edit
          </Link>
          <button
            className="btn btn-danger mr-2"
            onClick={() => handleDeleteCard(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default CardItem;
