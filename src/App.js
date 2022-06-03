import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Houses from './components/houses'
import Condos from './components/condos'
import $ from 'jquery'

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
      let currentImgIndex = 0
      let numOfImages = $('.project-screenshots').children().length - 1
    
      $('.next').on('click', () => {
        $('.project-screenshots').children().eq(currentImgIndex).css('display', 'none')
        if (currentImgIndex < numOfImages){
          currentImgIndex++
        } else {
          currentImgIndex = 0
        }
        $('.project-screenshots').children().eq(currentImgIndex).css('display', 'block')
      })
    
      $('.previous').on('click', () => {
        $('.project-screenshots').children().eq(currentImgIndex).css('display', 'none')
        if(currentImgIndex > 0) {
          currentImgIndex--
        } else {
          currentImgIndex = numOfImages
        }
        $('.project-screenshots').children().eq(currentImgIndex).css('display', 'block')
      })

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
        <div class='slides-primary'>
          <div class='slides-container'>
            <div class='previous'>
              <span>
                <a href="#" class="previousbtn">&laquo;</a>
              </span>
            </div>
            <div class='project-screenshots'>
              <img class='screenshots' src='https://www.housedigest.com/img/gallery/exterior-house-colors-you-should-avoid-using-at-all-costs/intro-1619022773.webp'>
              </img>
              <img class='screenshots' src='https://media.istockphoto.com/photos/single-family-new-construction-home-in-suburb-neighborhood-in-the-picture-id1147674296?k=20&m=1147674296&s=612x612&w=0&h=Nk11QdlAqLZQEkOx1DDKcWJoSnQn29AjdUQpKeK_GCs='>
              </img>
              <img class='screenshots' src='https://images.ctfassets.net/pg6xj64qk0kh/2r4QaBLvhQFH1mPGljSdR9/39b737d93854060282f6b4a9b9893202/camden-paces-apartments-buckhead-ga-terraces-living-room-with-den_1.jpg'>
              </img>
              <img class='screenshots' src='https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/stock%2FGettyImages-1164596018_copy'>
              </img>
              <img class='screenshots'src='https://image1.apartmentfinder.com/i2/vGcr85sYkBnOMY6spmFvM_yKIn6gy0XYy6Nl8SvtQnM/110/image.jpg'/>
            </div>
            <div class='next'>
              <span>
                <a href="#" class="nextbtn">&raquo;</a>
              </span>
            </div>
          </div>
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
