import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {readDeck} from '..//utils/api/index'
import StudyCard from './StudyCard';
import NotEnough from './NotEnough';
import Breadcrumb from './Breadcrumb';

function Study() {

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
    const renderStudyCardDisplay = (
      <div>
        <Breadcrumb crumbs={["Home", deck.name, "Study"]} />
        <h2>Study: {deck.name}</h2>
        {/** display not enough if not least 3 cards to study */}
        {deck.cards.length >= 3 ? <StudyCard cards={deck.cards} /> : <NotEnough deck={deck} />}
      </div>
    )
    return (
      <>{renderStudyCardDisplay}</>
    );
  } else {
    return <p>Loading</p>;
  }
}

export default Study
