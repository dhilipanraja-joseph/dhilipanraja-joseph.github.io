import React, { Component } from 'react'
import NavLink from './NavLink'


export default class NavBar extends Component {
  closeNav(){
    var el1 = document.getElementById("bs-navbar-collapse");
    el1.classList.remove("in");
  }
  render() {
    return (
      <nav id="mainNav" style={navbarshow} className="navbar navhide navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-navbar-collapse">
              Menu
            </button>
            <NavLink to="/" className="navbar-brand"> Dhilipanraja </NavLink>
          </div>
          <div className="collapse navbar-collapse" id="bs-navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>
              <li>
                <NavLink onClick={this.closeNav} to="/projects">Portfolio</NavLink>
              </li>
              {/* <li>
                <NavLink onClick={this.closeNav} to="/qualification">Qualification</NavLink>
              </li> */}
              {/* <li>
                <NavLink onClick={this.closeNav} to="/about">About Me</NavLink>
              </li> */}
              {/* <li>
                <NavLink onClick={this.closeNav} to="/resume">View My Resume</NavLink>
              </li> */}
              <li>
                <NavLink onClick={this.closeNav} to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


const navbarshow = {
  // display: 'none'
}
