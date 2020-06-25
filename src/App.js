import React, {useState} from 'react';
import Login from './components/auth/Login';
import NavBar from './components/layout/NavBar';
import Home from './components/home/Home';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {loadState,clearState} from './localStorage';
import AuthUserContext from './components/session/context';

function App() {

  const [user,setUser] = useState(loadState());

  const signOut = () => {
    setUser(null);
    clearState();
  }

  return (
    <AuthUserContext.Provider value={[user,setUser]}>
    <div className="main" >
      <NavBar btnClick={signOut}/>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </Router>
    </div>
    </AuthUserContext.Provider>
  );
}

export default App;
