import { useContext } from 'react';
import { Context } from '../context/SurveyContext';

import { ANSWER_ARRAY } from '../context/SurveyReducer';

function SurveyQuestion({id}) {
  const [ state, dispatch ] = useContext(Context);

  const updateValues = (index, item) => {
    dispatch({ type: ANSWER_ARRAY, payload: {
      index, item
    }});
  };

  return (
    <>
      <h4>{state.data.survey[id].question}</h4>
      <div className="answer">
      {state.data.survey[id].choices.map((item, index) => {
        return (
          <div className="answer-selection" key={`${state.currentSelection}-${index}-choice`}>
            <input name="choice" type="radio" id={`${state.currentSelection}-${index}-choice`} value={`${state.currentSelection}-${index}-choice`} className="regular" tabIndex="0" data-index="0" aria-label={item} onClick= {() => updateValues(id, item)}></input>
            <label htmlFor={`${state.currentSelection}-${index}-choice`} tabIndex="-1" aria-hidden="true" onClick= {() => updateValues(id, item)}>{item}</label>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default SurveyQuestion;