import React from "react";
import { useParams } from "react-router";
import CardItem from "./CardItem";
import { deleteCard, readDeck } from "../utils/api/index";

/**
 * component to display list of cards in deck
 * @param {} props 
 * @returns 
 */
function CardItemList(props) {
  
  const { deckId } = useParams();
  const { cards } = props;
  const {setDeck} = props;

  /**
   * Delete card 
   * message up on delete
   * @param {*} id 
   */
  async function handleDeleteCard(id) {
    const message = window.confirm(
      "Delete this card?\n\n ..will not be able to recover after deletion."
    );
    if (message) {
      await deleteCard(id);
      const updatedDeck = await readDeck(deckId);
      setDeck(updatedDeck);
    }
  };

  /**
   * Render view of the card list
   */
  const renderView = (
    <div className="mb-2 mt-2">
      <h2>Cards</h2>
      <ul className="list-group">
        {cards.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            handleDeleteCard={handleDeleteCard}
          />
        ))}
      </ul>
    </div>
  )

  return (
    <>{renderView}</>
  );
}

export default CardItemList;
