import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardForm from "./CardForm";
import { readDeck } from "../utils/api/index";
import Breadcrumb from "./Breadcrumb";

function CardEdit() {
  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const loadDeck = async () => {
      const readLoadedDeck = await readDeck(deckId, abortController.signal);
      setDeck(readLoadedDeck);
    };
    loadDeck();
  }, [deckId, cardId]);

  if (deck) {
    const card = deck.cards.find((card) => `${card.id}` === cardId);

    const renderCardEditDisplay = (
      <div>
        <Breadcrumb
          crumbs={["Home", deck.name, `Edit Card ${cardId}`]}
        />
        <h2>Edit Card</h2>
        <CardForm front={card.front} back={card.back} isNotNew={true} />
      </div>
    )
    return (
      <>{renderCardEditDisplay}</>
    );
  } else {
    return <p>Loading</p>;
  }
}

export default CardEdit;
