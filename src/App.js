import './App.css';

import Login from './Pages/Login/Login'
import Posts from './Pages/Posts/Posts'
import { HashRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';




function App() {
  const [data, setData] = useState()

  useEffect(()=>{
    const data = localStorage.getItem('data')

    if(data){
      setData(JSON.parse(data))
     }
    },[])


  return (
    <div className="App">
      <HashRouter>
        <Switch >
          <Route exact path="/"><Login/></Route>
          <Route exact path="/posts:index"><Posts
            data = {data}
          /></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
