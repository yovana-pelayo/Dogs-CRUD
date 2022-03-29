import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dogs from './views/Dogs';
import Home from './views/Home';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dogs">
            <Dogs />
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
