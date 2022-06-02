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
        <h1>About our platform...</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est augue, placerat id nisl at, pretium accumsan ligula. Praesent dictum justo ante, et iaculis lorem euismod id. Pellentesque dictum neque malesuada viverra laoreet. Aliquam libero turpis, consectetur a metus vitae, suscipit porta lorem. Vivamus mollis, odio at fringilla finibus, ante justo tincidunt sapien, in pellentesque purus nisi ut turpis. Aenean porttitor sem felis, quis finibus ligula vehicula in. Nulla sed ultrices nibh. Nullam a leo dui.</p>
        <p>Maecenas vitae ex diam. Nulla facilisi. Ut sed ante mi. Aenean quis libero gravida, semper elit ac, tincidunt ligula. Mauris sit amet eros hendrerit, euismod arcu ut, fermentum ipsum. Curabitur vitae congue magna, sed hendrerit sapien. Aliquam lobortis gravida congue. Phasellus maximus tempor odio et vestibulum. Nullam quam sapien, euismod eleifend lacinia nec, sodales vel enim. Etiam ut iaculis ante, eget vehicula est. In viverra eget sem non luctus. Pellentesque leo ligula, dictum in accumsan vitae, bibendum non ex.
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
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Paytone+One&display=swap');
      </style>
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
