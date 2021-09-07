import './styles/App/App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Auth from './components/Auth/Auth';

const App = () => {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/auth">
          <Auth />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
