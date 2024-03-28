import { dark } from '@mui/material/styles/createPalette';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Bootstrap.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import BreakupSongs from './Pages/BreakupSongs';
import DusseraSongs from './Pages/DusseraSongs';
import EnglishSongs from './Pages/EnglishSongs';
import Homepage from './Pages/Homepage';
import TamilSongs from './Pages/TamilSongs';

function App() {

function DARK() {
const darkmode = document.getElementById("div")
   if (darkmode.classList.contains("dark")){
       darkmode.classList.replace("dark", "light")
   }else{
    darkmode.classList.replace("light", "dark")
   }}
    
var darkmodebtn ={
  position:"absolute",
  top:"5px",
  right:"180px"
}   
  return (



    <div id='div' className="dark">
<Header/>
<div>
<input style={darkmodebtn} type={'radio'} onClick={DARK}></input>
</div>

<BrowserRouter>
  <Routes>
    <Route exact  path='/' element={<Homepage/>}/>
    <Route exact  path='/BreakupSongs' element={<BreakupSongs/>}  />
    <Route exact  path='/EnglishSongs' element={<EnglishSongs/>}  />
    <Route exact  path='/TamilSongs' element={<TamilSongs/>}  />
 <Route exact path='/DusseraSongs' element={<DusseraSongs/>}/>
  </Routes>
</BrowserRouter>

<Footer/>

    </div>
  );
}

export default App;
