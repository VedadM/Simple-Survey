import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './Pages/Main';
import Survey from './Pages/Survey';
import Results from './Pages/Results';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route exact path="/survey" element={<Survey />} />
        <Route exact path="/results" element={<Results />} />
      </Routes>

      <Footer />

    </BrowserRouter>
    </div>
  );
}

export default App;
