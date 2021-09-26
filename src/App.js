import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {

  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route path="/Homepage" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </div>
  );

}

export default App;
