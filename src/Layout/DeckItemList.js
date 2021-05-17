import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import CardItemList from "./CardItemList";
import DeckItem from "./DeckItem";
import Breadcrumb from "./Breadcrumb";
/**
 * Display Deck items list
 * @param {*} props 
 * @returns 
 */
function DeckItemList(props) {
  const { handleDeleteDeck } = props;
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const loadDeck = async () => {
      const data = await readDeck(deckId, abortController.signal);
      setDeck(data);
    };
    loadDeck();
    return () => abortController.abort();
  }, [deckId]);

  if (deck) {
    const renderItemList = (
      <div className="mb-2 mt-2">
        <Breadcrumb crumbs={["Home", deck.name]} />
        <DeckItem
          name={deck.name}
          description={deck.description}
          handleDeleteDeck={handleDeleteDeck}
        />
        <CardItemList cards={deck.cards} setDeck={setDeck} />
      </div>
    )
    return (
      <>{renderItemList}</>
    );
  } else {
    return <p>Loading</p>;
  }
}

export default DeckItemList;
