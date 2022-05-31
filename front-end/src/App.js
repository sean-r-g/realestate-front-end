import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Houses from './components/houses'
import Condos from './components/condos'
function App() {
  const [displayHouses, setDisplayHouses] = useState(true)
  const toggleDisplay = () =>{
    displayHouses ? setDisplayHouses(false) : setDisplayHouses(true)
  }
  return (
    <>
      <header>
      { displayHouses ? <button className='display-btn' onClick={toggleDisplay}>Show Condos</button> : <button className='display-btn' onClick={toggleDisplay}>Show Houses</button>}
      {/* <h1>Okeke-Gillis Realty</h1> */}
      <img src='https://i.imgur.com/P163pZY.png'/>
      </header>
      { displayHouses ? <Houses/> : <Condos/>}
    </>
  );
}
export default App;