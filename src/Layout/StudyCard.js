import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
/**
 * study card view
 * @param {*} props 
 * @returns 
 */
function StudyCard(props) {
  const [isFront, setIsFront] = useState(true);
  const [cardCurrentIndex, setCurrentCardIndex] = useState(0);
  const history = useHistory();

  const { cards } = props;
  const { front, back } = cards[cardCurrentIndex];

  //handle Fliping of card
  const handleFlip = () => {
    setIsFront(!front);
  };

  // handle next card
  const handleNext = () => {
    setIsFront(!front);
    const newIndex = cardCurrentIndex + 1;

    if (newIndex >= cards.length) {
      const message = window.confirm("Restart cards?\n\n. Click 'cancel' to return ");
      if (message) {
        setCurrentCardIndex(0);
      } else {
        history.push("/");
      }
    } else {
      setCurrentCardIndex(newIndex);
    }
  };

  //render card display
  const renderStudyCard = (
    <div>
      <div className="card-body">
        <h4 className="card-title">{`Card ${cardCurrentIndex + 1} of ${cards.length}`}</h4>
        <p className="card-text">{isFront ? front : back}</p>
        <button className="btn btn-secondary mr-2" onClick={handleFlip}>
          Flip
        </button>

        {!isFront && (
          <button className="btn btn-primary mr-2" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  )

  return (
    <>{renderStudyCard}</>
  );
}

export default StudyCard
