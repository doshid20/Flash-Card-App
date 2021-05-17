import React, { useState, useEffect } from "react";
import DeckEdit from "./DeckEdit";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import Breadcrumb from "./Breadcrumb";

/**
 * display deck with updated data
 * readDeck from api.
 * @param {*} props
 * @returns
 */
function DeckEditDisplay(props) {
  const [deck, setDeck] = useState(null);
  const { deckId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    const loadDeck = async () => {
      const loadedDeck = await readDeck(deckId, abortController.signal);
      setDeck(loadedDeck);
    };

    loadDeck();

    return () => abortController.abort();
  }, [deckId]);

  if (deck) {
    const renderEditDeckDisplay = (
      <div>
        <Breadcrumb crumbs={["Home", deck.name, "Edit Deck"]} />
        <h2>Edit Deck</h2>
        <DeckEdit name={deck.name} description={deck.description} />
      </div>
    )
    return (
      <>{renderEditDeckDisplay}</>
    );
  } else {
    return <p>Loading</p>;
  }
}

export default DeckEditDisplay;
