import { useContext } from 'react';
import SurveyNavigationButtons from './SurveyNavigationButtons';
import SurveyQuestion from './SurveyQuestion';
import { Context } from '../context/SurveyContext';

function SurveyContainer() {
  const [ state ] = useContext(Context);

  return (
    <>
      <SurveyQuestion id={state.currentSelection} />

      <SurveyNavigationButtons />
    </>
  )
}

export default SurveyContainer;