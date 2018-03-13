import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import LisaaSivu from './pages/LisaaSivu';
import Etusivu from './pages/Etusivu';
import Avaruuskuva from './pages/Avaruuskuva';
import ListaaSivu from './pages/ListaaSivu';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Layout/>
        </BrowserRouter>
    );
  }
}

function Layout() {
    return(
    <div>

        <NavLink exact to="/juttuja"
        activeClassName="active">Etusivu</NavLink>&nbsp;

        <NavLink exact to="/juttuja/listaa"
        activeClassName="active">Listaa</NavLink>&nbsp;

        <NavLink to="/juttuja/lisaa"
        activeClassName="active">Lisää</NavLink>&nbsp;

        <NavLink to="/juttuja/avaruuskuva"
        activeClassName="active">Avaruuskuva</NavLink>&nbsp;

        <Switch>
        <Route exact path="/juttuja" component={Etusivu}/>
        <Route path="/juttuja/listaa" component={ListaaSivu}/>
        <Route path="/juttuja/lisaa" component={LisaaSivu}/>
        <Route path="/juttuja/avaruuskuva" component={Avaruuskuva}/>
        </Switch>
    </div>
    )
}

export default App;
