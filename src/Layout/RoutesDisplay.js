import React from 'react'
import { Route, Switch } from 'react-router';
import {Link} from 'react-router-dom';
import DeckList from './DeckList';
import DeckEditDisplay from './DeckEditDisplay';
import DeckAddDisplay from "./DeckAddDisplay"
import NotFound from "./NotFound";
import CardAdd from "./CardAdd";
import CardEdit from "./CardEdit";
import Study from './Study';
import DeckItemList from './DeckItemList';

function RoutesDisplay(props) {
  const { decks, handleDeleteDeck } = props;
    return (
        <div>
        <Switch>
          <Route exact path="/">
            <Link className="btn btn-secondary mb-2 mt-2" to="/decks/new">
              + Create Deck
            </Link>
            <DeckList decks={decks} handleDeleteDeck={handleDeleteDeck} />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit/>
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CardAdd/>
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEditDisplay />
          </Route>
          <Route path="/decks/new">
            <DeckAddDisplay />
          </Route>
          <Route path="/decks/:deckId">
            <DeckItemList handleDeleteDeck={handleDeleteDeck} />
          </Route>
          <Route>
            <NotFound />
          </Route>
      </Switch>
      </div>
    )
}

export default RoutesDisplay
