import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import DogDetail from './Components/DogDetail';
import DogList from './Components/DogList';
import Home from './views/Home';
import AdminPage from './views/AdminPage';
import EditDog from './views/EditDog';
import Header from './Components/Header';
import Auth from './views/Auth';
import { useState } from 'react';
import { getUser } from './services/users';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  return (
    <div className="App">
      <BrowserRouter>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/auth">
            <Auth setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/dogs/new">
            {currentUser ? <AdminPage /> : <Redirect to="/auth" />}
          </Route>
          <Route exact path="/dogs">
            <DogList />
          </Route>
          <Route exact path="/dogs/:id/edit">
            <EditDog />
          </Route>
          <Route exact path="/dogs/:id">
            <DogDetail currentUser={currentUser} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

// why is the current user outside of the element?
// we are saying that if authenticated go to new page.. if anything else go to auth page.. but how? lololol XD
// currentUser is state, state is being passed through as prop like julie sai din lecture. I get what we're doing but I'm having a hard time understanding this. I'll look up examples once I catch up

export default App;
