import React, { useState, useEffect } from "react";
import styled from 'styled-components';
// import axios from "axios";
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ListTripsPage from './pages/ListTripsPage'

const DivApp = styled.div`
  background-color: gray;
  width: 100vw;
  height: 100vh;
  display: flex;
`

function App() {
  const [page, setPage] = useState("Home")


  const choosePage = (pag) => {
    setPage(pag)
  }


  switch (page) {
    case 'Home':
      return <HomePage setPage={choosePage}/>
    case 'Login':
      return <LoginPage setPage={choosePage}/>
    case 'Trips':
      return <ListTripsPage setPage={choosePage}/>
  }

  return (
    <DivApp>
      {page}
    </DivApp>
  );
}

export default App;