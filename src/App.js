import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DogDetail from './views/DogDetail';
import DogList from './views/Dogs';
import Home from './views/Home';
import NewPage from './views/NewPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dogs">
            <DogList />
          </Route>
          <Route exact path="/dogs/:id">
            <DogDetail />
          </Route>
          <Route exact path="/dogs/new">
            <NewPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
