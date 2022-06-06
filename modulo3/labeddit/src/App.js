import React, { useState } from "react";
import GlobalState from "./context/GlobalState";
import { BrowserRouter } from "react-router-dom";
// import theme from "./constants/theme";
import Router from './routes/Router'
import Header from './components/Header/Header'
// import { ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login");


  return (
    <GlobalState>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
        <Router setRightButtonText={setRightButtonText} />
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
