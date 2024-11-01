import { createContext, useReducer } from "react";
import SurveyReducer from './SurveyReducer';

const data = require('../survey.json'); 

export const Context = createContext();

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(SurveyReducer, {data, currentSelection: 0, answers: Array(data.survey.length)});

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default Store;
