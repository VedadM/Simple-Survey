import { useContext } from 'react';
import { Link } from "react-router-dom";

import { Context } from "../context/SurveyContext";
import { RESET_SURVEY } from '../context/SurveyReducer';

function Results() {
  const [ state, dispatch ] = useContext(Context);

  const resetSurvey = () => {
    dispatch( {type: RESET_SURVEY} );
  }

  return (
    <>
      <h1>Your results are here:</h1>
      <ul>
        {state.answers.map((item, index) => {
          return (<li key={index}>{item}</li>);
        })}
      </ul>
      <Link className="button" to="/" onClick={resetSurvey}>Back to Survey</Link>
    </>
  )
}

export default Results;