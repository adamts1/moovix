import './App.css';

import Login from './Pages/Login/Login'
import Posts from './Pages/Posts/Posts'
import { HashRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  const [token, setToken] = useState()

  useEffect(() => {
    window.localStorage.removeItem('token');
  }, [])

  return (
    <div className="App">
      <HashRouter>
        <Switch >
          <Route exact path="/">
            <Login
              setToken={(token) => setToken(token)}
            />
          </Route>
          <Route exact path="/posts:index">
            <Posts
              token={token}
            />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
