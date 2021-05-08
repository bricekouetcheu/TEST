import React from 'react';

import{ BrowserRouter as router, Switch , Route, BrowserRouter } from "react-router-dom";
import About from './page/About';
import Home from './page/Home';
import Notfound from './page/Notfound';


const App = () => {
  return ( //pour creer les differentes pages de navigation
     <BrowserRouter>
        <Switch>
          <Route path ="/" exact component={Home}/>
          <Route path = "/a-propos" exact component = {About}/>
          <Route component = {Notfound}/>
          
        </Switch>
     
     </BrowserRouter>
  );
};

export default App;