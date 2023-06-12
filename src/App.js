
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Container from './components/Container/Container';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import Browse from './Pages/Browse/Browse';
import Details from './Pages/Details/Details';
import Streams from './Pages/Streams/Streams';
import Profile from './Pages/Profile/Profile';
import React, { Component } from 'react'

export default class App extends Component {
  state={
    mode:"dark",
    menuBarIsOpened: false
  }
  changeModeLight = ()=>{
    this.setState({
      mode: "light"
    })
}
changeModeDark = ()=>{
  this.setState({
    mode: "dark"
  })
}
menuBar = () => {
  this.setState({
    menuBarIsOpened: !this.state.menuBarIsOpened
  })
}
outsideMenuBar = (eo) => {
  this.setState({
    menuBarIsOpened: false
  })
  console.log("###############################");
}
  OnClickOutsideMenuBar = () => {
    if (this.state.menuBarIsOpened) {
      this.outsideMenuBar()
    }
  }

  render() {
    return (
      <div className={'app ' + (this.state.mode)}>
        <BrowserRouter>
        <Header outsideMenuBar={this.outsideMenuBar} menuBar={this.menuBar} changeModeLight={this.changeModeLight} changeModeDark={this.changeModeDark} state={this.state} />          
          <div onClick={this.OnClickOutsideMenuBar}>
          <Container modee={this.state.mode}>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/browse' element={<Browse/>} />
              <Route path='/details' element={<Details/>} />
              <Route path='/streams' element={<Streams/>} />
              <Route path='/profile' element={<Profile/>} />
            </Routes>
          </Container>
          </div>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}
