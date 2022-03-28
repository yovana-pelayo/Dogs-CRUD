import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route path="/">
            <Home />
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
