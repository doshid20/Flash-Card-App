import React, {useState, useEffect} from "react";
import {useLocation, useHistory, useParams} from 'react-router-dom'
import {listDecks, deleteDeck} from '../utils/api';
import Header from "./Header";
import RoutesDisplay from './RoutesDisplay';


function Layout() {

  const [decks, setDecks] = useState([]);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();

    const loadDecks = async () => {
      const data = await listDecks(abortController.signal);
      setDecks(data);
    };
    loadDecks();

    return () => {
      abortController.abort();
    };
  }, [location]);

  const handleDeleteDeck = async (deckId) => {
    const result = window.confirm("Delete this deck?\n\nYou will not be able to recover it.");
    if (result) {
      await deleteDeck(deckId, new AbortController().signal);
      const data = await listDecks(new AbortController().signal);
      setDecks(data);
      history.push("/");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <RoutesDisplay decks={decks} handleDeleteDeck={handleDeleteDeck} />
      </div>
    </>
  );
}

export default Layout;
