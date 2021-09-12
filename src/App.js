import './styles/App/App.css';
import { createContext, useState } from 'react';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import NewsCategory from './components/Category/NewsCategory';
import NavBar from './components/Home/NavBar';
export const UserContext = createContext();

const App = () => {
  const [auth, setAuth] = useState({
    status: false,
    email: '',
    name: '',
    photo: ''
  });
  const [nav, setNav] = useState(null);

  return (
    <UserContext.Provider value={[auth, setAuth, nav, setNav]}>
      <Router>
        <NavBar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/auth">
            <Auth />
          </Route>

          <Route exact path="/category/:title">
            <NewsCategory />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
