import React from 'react'
import {Link, useParams} from 'react-router-dom';

function NotEnough(props) {
    const {deckId} = useParams();
    const { deck } = props;
    return (
        <div>
            <h3>Not enough cards.</h3>
            <p>You need at least 3 cards to study. Only {deck.cards.length} cards in this deck.
            </p>
            <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary mr-2">
                + Add Cards
            </Link>
        </div>
    )
}

export default NotEnough
