import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {Inicio} from '../components/Inicio/Inicio';
import {Catalogo} from '../components/Catalogo/Catalogo.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Inicio}/>
        <Route path="/search/:sort/:page/:filter?" component={Catalogo}/>
      </Switch>
    </div>
  );
};

export default App;
