import React, { Component } from 'react';
import {NavLink,Route,Switch} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import logo from './logo.svg';
import './App.css';
import About from './routes/About'
import List from './routes/List'
import Info from './routes/Info'
import Home from './routes/Home'
import Form from './routes/form/Form'
import Formik from './routes/formik/Formik'
// nihao
const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <NavLink to="/home" activeClassName='selected'>首页</NavLink>
          <NavLink to="/list" activeClassName='selected'>列表</NavLink>
          <NavLink to="/info" activeClassName='selected'>详情</NavLink>
          <NavLink to="/about" activeClassName='selected'>关于</NavLink>
          <NavLink to="/form" activeClassName='selected'>form</NavLink>
          <NavLink to="/formik" activeClassName='selected'>formik</NavLink>
        </p>
        <Content style={{ padding: '0 50px' }}>
          <Switch>
          <Route path="/about" exact  component={About}/> 
          <Route path="/list" exact  component={List}/>
          <Route path="/info" exact  component={Info}/>
          <Route path="/form" exact  component={Form}/>
          <Route path="/formik" exact  component={Formik}/>
          <Route exact component={Home}/>
          </Switch>
        </Content>
      </div>
    );
  }
}

export default App;
