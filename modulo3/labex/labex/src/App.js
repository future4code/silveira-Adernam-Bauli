import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ListTripsPage from './pages/ListTripsPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Router } from './routes/Router'



const DivApp = styled.div`
  /* background-color: gray; */
  width: 100vw;
  height: 100vh;
  display: flex;
`

function App() {
  const [page, setPage] = useState("Home")


  // const choosePage = (pag) => {
  //   setPage(pag)
  // }


  // switch (page) {
  //   case 'Home':
  //     return <HomePage/>
  //   case 'Login':
  //     return <LoginPage/>
  //   case 'Trips':
  //     return <ListTripsPage/>
  // }

  return (
    <DivApp>
      <Router/>
    </DivApp>
  );
}

export default App;