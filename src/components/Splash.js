import React, { Component } from 'react'
import NavLink from './NavLink'

export default class Splash extends Component {
  componentDidMount(){
      var el = document.getElementById("mainNav");
      el.classList.remove("navshow");
      el.classList.add("navhide");
      var el1 = document.getElementById("bs-navbar-collapse");
      el1.classList.remove("in");
  }

  render() {
    return (
      <div>
        <div id="splashDiv">
          <div className="text-center row divRotateRight">
            <div className="col-md-4">
              <h1 className="breefont"><b>Dhilipanraja Joseph</b></h1>
              <hr/>
              <a href="Dhilipanraja_Joseph_Resume.pdf" target="_blank"><div className="downloadBtn">
                <h4>DOWNLOAD MY RESUME</h4>
              </div></a>
            </div>
            <div className="col-md-4">
              <img style={dp} src="mydp.jpg" alt="NO_ME_PIC"/>
              <div className="text-center icons divFadeInU">
                <a href="https://www.linkedin.com/in/dhilipanraja-joseph-586b82112/" target="_blank">
                  <i style={iconSize} id="linkedinIcon" className="socialIcon fa fa-linkedin-square"></i>
                </a>
                <a href="https://www.facebook.com/dhilipanraja/" target="_blank">
                  <i style={iconSize} id="fbIcon" className="socialIcon fa fa-facebook-square"></i>
                </a>
                <a href="https://github.com/dhilipanraja-joseph/" target="_blank">
                  <i style={iconSize} id="githubIcon" className="socialIcon fa fa-github"></i>
                </a>
                <a href="https://plus.google.com/100005054585488195069/" target="_blank">
                  <i style={iconSize} id="googleIcon" className="socialIcon fa fa-google-plus-square"></i>
                </a>
                <a href="https://twitter.com/dlipnraj/" target="_blank">
                  <i style={iconSize} id="twitterIcon" className="socialIcon fa fa-twitter-square"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <h2>Full Stack Javascript Developer</h2>
              <hr/>
              <NavLink to="/projects">
              <div className="downloadBtn">
                <h4>VIEW MY PORTFOLIO</h4>
              </div>
              </NavLink>
            </div>
          </div>
          <div className="divFadeInU row" style={bannerBottom}>
            <h1 style={headOne} className="text-center">About Me</h1>
            <p>Hi, I'm Dhilipanraja Joseph, B.E Computer Science and Engineering - graduate from Anna University, Chennai, India. After completing my education I immigrated to US.</p>
            <p>I am a person who is always willing to explore and learn new things, and I like the idea that Computer Science has many areas to be explored. Currently, I am very interested in Mobile and Web Development. I have worked in web applications and mobile apps for iOS and Android. My favorite languages so far are Python and Javascript because of the explicit syntax and amount of resources that are available.</p>
            <p>Besides coding for my free time, I like to read random articles on the Internet. I mostly prefer to read science and technology articles. I also spend time reading questions and articles in Quora and Stack Overflow.</p>
          </div>
          <div className="divFadeInU row" style={bannerBottom}>
            <h1 style={headOne} className="text-center">About My Website</h1>
            <p>This Website is built using ReactJS, and bundle created using Webpack. If you think my site and projects are awesome, feel free to <NavLink to="/contact">contact me..</NavLink></p>
          </div>
        </div>
        {/* <div className="jumpCBtn">
          <NavLink to="/contact">
            <div className="moreBtn"> */}
              {/* <span style={icon} className="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span> */}
              {/* <h4><b>CONNECT WITH ME</b></h4>
            </div>
          </NavLink>
        </div> */}
      </div>
    );
  }
}

const headOne = {
  marginBottom: '10px',
  borderBottom: '2px solid #000',
  paddingBottom: '5px',
};

const icon = {
  fontSize: '25px'
};

const buttonDiv = {
  border: '1px solid #000',
  width: '70%',
  margin: 'auto',
};

const bannerBottom = {
  margin: 'auto',
  marginTop: '40px',
  width: '80%',
};

const iconSize = {
  fontSize: '40px',
  padding: '5px',
}

const dp = {
  margin: '20px',
  width: '200px',
  height: '200px',
  border: '3px solid white',
  borderRadius: '100px'
};
