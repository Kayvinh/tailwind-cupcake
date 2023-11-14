import { BrowserRouter } from 'react-router-dom';
import Navigation from './routes/Navigation';
import RoutesList from './routes/RoutesList';


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
