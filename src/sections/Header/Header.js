import './Header.css'
import React from 'react'
import logo from "../../assets/logo.png"
import Navbar from '../../components/Navbar/Navbar'
import { BsFillMoonFill, BsFillSunFill, BsTextRight, BsXLg } from "react-icons/bs"
import { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  // state={
  //   menuBarIsOpened: false
  // }
  // menuBar = () => {
  //   this.setState({
  //     menuBarIsOpened: !this.state.menuBarIsOpened
  //   })
  // }
  // onblur = (eo) => {
  //   this.setState({
  //     menuBarIsOpened: false
  //   })
  //   console.log("###############################");
  // }
  // onclick = (eo) => {
  //   console.log(eo);
  // }

  darkStyle = {
    cursor:"pointer",
    fontSize: "22px",
    border: "none",
    width: "45px",
    height: "45px",
    borderRadius: "var(--brd-rd-cercul)",
    display: "grid",
    placeContent: "center",
    color: "var(--yellow-color)",
    background: "var(--dark-color)"
}
lightStyle = {
  cursor:"pointer",
  fontSize: "22px",
  border: "none",
  width: "45px",
  height: "45px",
  borderRadius: "var(--brd-rd-cercul)",
  display: "grid",
  placeContent: "center",
  color:"var(--light-color)",
  background: "var(--dark-color)"
}
  
  render() {
    return (
        <div className="parent-header">
                <div className='header'>
          <div className="logo">
              <NavLink onClick={this.props.outsideMenuBar} to="/">
                <img src={logo} alt="Logo" />
              </NavLink>
          </div>
          
           <div className="last-parent-nav">
           <Navbar outsideMenuBar={this.props.outsideMenuBar} menuBarIsActive={this.props.state.menuBarIsOpened ? "activeMenuBar" : "" }/>
              <div className="big-mode">
              {this.props.state.mode ==="dark" ? <button style={this.darkStyle} onClick={this.props.changeModeLight} > <BsFillSunFill/> </button> : <button style={this.lightStyle} onClick={this.props.changeModeDark} > <BsFillMoonFill/> </button>}
              </div>
           </div>
          <div className="parent-mode">
            <div onClick={this.props.menuBar} className="menu-icon">
              {this.props.state.menuBarIsOpened ? <BsXLg/> : <BsTextRight/> }
            </div>
            {this.props.state.mode ==="dark" ? <button style={this.darkStyle} onClick={this.props.changeModeLight} > <BsFillSunFill/> </button> : <button style={this.lightStyle} onClick={this.props.changeModeDark} > <BsFillMoonFill/> </button>}
          </div>
      </div>
        </div>
    )
  }
}
