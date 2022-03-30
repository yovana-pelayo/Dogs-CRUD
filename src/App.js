import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DogDetail from './Components/DogDetail';
import DogList from './Components/DogList';
import Home from './views/Home';
import AdminPage from './views/AdminPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dogs/new">
            <AdminPage />
          </Route>
          <Route exact path="/dogs">
            <DogList />
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
