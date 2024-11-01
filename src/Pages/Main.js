import { useContext, useEffect, useMemo } from 'react';
import { Context } from '../context/SurveyContext';
import { Link } from 'react-router-dom';

function Main() {
  const [ state ] = useContext(Context);

  const x = useEffect(() =>{
    if(document.querySelector(".intro-text")) {
      document.querySelector(".intro-text").innerHTML = state.data.main.info;
    }
  }, [state.data.main.info])


  return (
    <>
      <p className="intro-text">{x}</p>
      <Link className="button" to="/survey">Survey Start</Link>
    </>
  )
}

export default Main;