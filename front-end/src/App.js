import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Houses from './components/houses'
import Condos from './components/condos'

function App() {










  return (
    <>
      <h1>Okeke-Gillis Realty</h1>
      <Houses house={house}/>
      <Condos condo={condo}/>
    </>
  );
}

export default App;
