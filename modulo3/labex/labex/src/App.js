import React, { useState, useEffect } from "react";
import styled from 'styled-components';
// import axios from "axios";
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const DivApp = styled.div`
  background-color: gray;
  width: 100vw;
  height: 100vh;
  display: flex;
`

function App() {
  const [page, setPage] = useState("Home")

  switch (page) {
    case 'Home':
      return <HomePage />
    case 'Login':
      return <LoginPage/>
  }

  return (
    <DivApp>
      {page}
    </DivApp>
  );
}

export default App;