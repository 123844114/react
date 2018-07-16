import React, { Component } from 'react';
import {NavLink,Route,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import About from './routes/About'
import List from './routes/List'
import Info from './routes/Info'
import Home from './routes/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <NavLink to="/home/1" activeClassName='selected'>首页</NavLink>
          <NavLink to="/list" activeClassName='selected'>列表</NavLink>
          <NavLink to="/info" activeClassName='selected'>详情</NavLink>
          <NavLink to="/about" activeClassName='selected'>关于</NavLink>
        </p>
        <div>
          <Switch>
          <Route path="/about" exact  component={About}/> 
          <Route path="/list" exact  component={List}/>
          <Route path="/info" exact  component={Info}/>
          <Route exact component={Home}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
