import { BrowserRouter } from 'react-router-dom';
import Navigation from './Routes/Navigation';
import RoutesList from './Routes/RoutesList';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
