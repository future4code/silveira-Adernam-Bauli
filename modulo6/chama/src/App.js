import { Router } from './routes/Routes';
import GlobalState from './context/GlobalState';

function App() {
  return (
    <div>
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
};

export default App;