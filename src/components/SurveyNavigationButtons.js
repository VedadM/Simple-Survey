import { useContext } from 'react';
import { Context } from '../context/SurveyContext';
import { Link } from 'react-router-dom';

import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../context/SurveyReducer';

function SurveyNavigationButtons() {

  const [ state, dispatch ] = useContext(Context);

  const previousClick = () => {
    dispatch( {type: PREVIOUS_QUESTION} );
  }

  const nextClick = () => {
    dispatch( {type: NEXT_QUESTION} );
  }

  const previousButtonChoice = () => {
    if (state.currentSelection === 0) {
      return <Link className="button" to="/">Back to Intro</Link>
    } else {
      return <button className="button" onClick={previousClick}>Previous</button>
    }
  }

  const nextButtonChoice = () => {
    if (state.data.survey.length - 1 === state.currentSelection) {
      return <Link className="button" to="/results">Results</Link>
    } else {
      return <button className="button" onClick={nextClick}>Next</button>
    }
  }

  return (
    <div className="button-container">
      {previousButtonChoice()}
      {nextButtonChoice()}
    </div>
  )
}

export default SurveyNavigationButtons;