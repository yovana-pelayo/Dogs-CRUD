import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DogDetail from './views/DogDetail';
import Dogs from './views/Dogs';
import Home from './views/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dogs">
            <Dogs />
          </Route>
          <Route exact path="/dogs/:id">
            <DogDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
