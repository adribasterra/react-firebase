import './App.css';
//Test components
import Hey from './components/first.jsx';
import Counter from './components/counter.jsx';
import List from './components/list.jsx';
import Temperature from './components/temperature.jsx';
import Form from './components/form.jsx';
import ListNames from './components/listNames.jsx';
import Properties from './components/properties';

//Routing components
import Home from './components/pages/home.jsx';
import About from './components/pages/about.jsx';
import Users from './components/pages/users.jsx';
import User from './components/pages/user.jsx';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


function App() {
  return (
    <Router>

      <Link to = './'>Users</Link>

      <Switch>
        <Route path="/users/:id">
          <User></User>
        </Route>
        <Route path="/">
          <Users></Users>
        </Route>
      </Switch>
    </Router>

    // <div className="App">
    //   <ListNames></ListNames>
    //   <Properties name ="Alba"></Properties>
    // </div>
  );
}

export default App;
