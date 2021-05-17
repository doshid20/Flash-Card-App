import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import CardForm from "./CardForm";
import Breadcrumb from "./Breadcrumb";
/**
 * Add cards to deck
 * read deck from api
 * @returns 
 */
function CardAdd() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);

  //call to readDeck, return promise
  useEffect(() => {
    const abortController = new AbortController();

    const loadDeck = async () => {
      const deckData = await readDeck(deckId, abortController.signal);
      setDeck(deckData);
    };
    loadDeck();
    return () => abortController.abort();
  }, [deckId]);

  if (deck) {
    return (
      <div>
        <Breadcrumb crumbs={["Home", deck.name, "Add Card"]} />
        <h2>{deck.name}: Add Card</h2>
        <CardForm />
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
}

export default CardAdd;
