import './App.css';
//Test components
import Hey from './components/test/first.jsx';
import Counter from './components/test/counter.jsx';
import List from './components/test/list.jsx';
import Temperature from './components/test/temperature.jsx';
import Form from './components/test/form.jsx';
import ListNames from './components/test/listNames.jsx';
import Properties from './components/test/properties';

//Routing components
import Home from './components/pages/home.jsx';
import About from './components/pages/about.jsx';
import Users from './components/pages/users.jsx';
import User from './components/pages/user.jsx';

//Authentication components
import Login from './components/authentication/login.jsx';
import Admin from './components/authentication/admin.jsx';
import Init from './components/authentication/init.jsx';
import Menu from './components/authentication/menu.jsx';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Menu></Menu>
      <Switch>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/login" component={Login}></Route>
        <Route exact path="/" component={Init}></Route>
      </Switch>
    </Router>

    // Simple routing
    // --------------
    // <Router>

    // <Link to = './'>Menu</Link>

    // <Switch>
    //   <Route path="/users/:id">
    //     <User></User>
    //   </Route>
    //   <Route path="/">
    //     <Users></Users>
    //   </Route>
    // </Switch>
    // </Router>

    // Initial behaviour
    // -----------------
    // <div className="App">
    //   <ListNames></ListNames>
    //   <Properties name ="Alba"></Properties>
    // </div>
  );
}

export default App;
