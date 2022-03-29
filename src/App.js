import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
