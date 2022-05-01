import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ListTripsPage from './pages/ListTripsPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Router } from './routes/Router'
import Wallpapper from './img/wallpapper.jpg'


const DivApp = styled.div`
  /* background-color: gray; */
  width: 100vw;
  height: 100vh;
  display: flex;

  img{
    /* background-image: url(${Wallpapper}); */
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    /* opacity: 50%; */
  }
`
const Div = styled.div`
  position: absolute;
`

function App() {


  return (
    <DivApp>
        <img src={Wallpapper}></img>
      <Div>
        <Router />
      </Div>
    </DivApp>
  );
}

export default App;