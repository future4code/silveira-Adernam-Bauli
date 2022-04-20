import React, {useState} from 'react';
import axios from 'axios';
import Home from './components/Home'
import MatchesPage from './components/MatchesPage'
import styled from 'styled-components';

const DivApp = styled.div`
  background-color: rgb(208, 208, 208);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`


function App () {

  const [page, setPage] = useState("home")

  const setMatches = () => {
    setPage("matches")
  }

  const setHome = () => {
    setPage("home")
  }

  const changePage = () => {
    switch (page) {
      case 'home':
        return <Home setMatches={setMatches}/>
      case 'matches':
        return <MatchesPage setHome={setHome}/>
    }

  }

  return (
    <DivApp>
      {changePage()}
    </DivApp>
  );
}

export default App;