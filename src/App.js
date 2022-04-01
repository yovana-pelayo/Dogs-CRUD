import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DogDetail from './Components/DogDetail';
import DogList from './Components/DogList';
import Home from './views/Home';
import AdminPage from './views/AdminPage';
import EditDog from './views/EditDog';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
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
          <Route exact path="/dogs/:id/edit">
            <EditDog />
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
