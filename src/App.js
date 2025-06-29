import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Home from './components/Home/index'
import Women from './components/Women/index'

import './App.css';
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Header />
        {/* <Home/> */}
        <Women/>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
