import React from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//pages
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import NotFound from './paginas/NotFound';
import Post from './paginas/Post';
import Categoria from './paginas/Categoria';

//components
import Cabecalho from './components/Cabecalho';

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sobre" component={Sobre} exact />
        <Route path="/categoria/:id" component={Categoria} />
        <Route path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
