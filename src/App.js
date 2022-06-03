import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Houses from './components/houses'
import Condos from './components/condos'

function App() {

  const [displayHouses, setDisplayHouses] = useState(false)
  const [displayCondos, setDisplayCondos] = useState(false)
  const [displayIntro, setDisplayIntro] = useState(true)


  const showHouses = () => {
    setDisplayIntro(false)
    setDisplayHouses(true)
    setDisplayCondos(false)
  }
  const showCondos = () => {
    setDisplayIntro(false)
    setDisplayHouses(false)
    setDisplayCondos(true)
  }
  const showIntro = () => {
    setDisplayIntro(true)
    setDisplayCondos(false)
    setDisplayHouses(false)
  }

  const Introduction = () =>{
    return (
      <div className='primary-div' id='about-div'>
        <h1>Browse. List. Update.</h1>
        <p>Welcome to realitive - an open community that allows prospective home owners and sellers to browse an ever-changing collection of houses and condos.</p>
        <p>Feel free to review the current listings, add additional ones, or update existing homes as appropriate.
        </p>
        <div className='button-div'>
          <button onClick={showHouses}>Houses</button>
          <button onClick={showCondos}>Condos</button>
        </div>
      </div>
    )
  }


  return (
    <>
      <head>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Paytone+One&display=swap');
      </style>
      </head>
      <header>
      { displayHouses ? <button className='display-btn' onClick={showCondos}>Show Condos</button> : <button className='display-btn' onClick={showHouses}>Show Houses</button>}
      <button id='about-btn' onClick={showIntro}>About</button>
      <img id='logo' src='https://i.imgur.com/J8OBU5K.png'/>
      </header>
      {displayIntro ? <Introduction/> : null}
      {displayHouses ? <Houses/> : null}
      {displayCondos ? <Condos/> : null}
      <footer>
      ©Okeke-Gillis
      </footer>
    </>
  );
}

export default App;
