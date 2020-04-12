
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "./pages/Header";
import Accueil from "./pages/Accueil";
import Blog from "./pages/Blog";
import Galerie from "./pages/Galerie";
import Formulaire from "./pages/Formulaire";



function App() {
  return (
      <div className="App">

        <Router>
          <Header />
          <Switch>
            <Route exact path="/accueil" component={Accueil} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/galerie" component={Galerie} />
            <Route exact path="/formulaire" component={Formulaire} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
