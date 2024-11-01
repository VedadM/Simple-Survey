export const NEXT_QUESTION = "NEXT_QUESTION";
export const PREVIOUS_QUESTION = "PREVIOUS_QUESTION";
export const ANSWER_ARRAY = "ANSWER_ARRAY";
export const RESET_SURVEY = "RESET_SURVEY";

const SurveyReducer = (state, action) => {
  // The switch statement is checking the type of action that is being passed in
  switch (action.type) {
    case NEXT_QUESTION: 
      return {
        ...state,
        currentSelection: (state.currentSelection >= state.data.survey.length - 1) ? state.data.survey.length -   1 : state.currentSelection++
      }
    case PREVIOUS_QUESTION: 
      return {
        ...state,
        currentSelection: (state.currentSelection <= 0) ? 0 : state.currentSelection--
      }
    case RESET_SURVEY:
      return {
        ...state,
        currentSelection: 0,
        answers: Array(state.data.length)
      } 
    case ANSWER_ARRAY:
      const newStateValue = [...state.answers]
      newStateValue[action.payload.index] = action.payload.item

      return {
        ...state,
        answers: newStateValue
      }
    default:
      return state;
  }
}

export default SurveyReducer;
  