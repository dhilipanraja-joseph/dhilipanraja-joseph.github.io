import React, { Component } from 'react'

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  componentDidMount() {
    var el = document.getElementById("mainNav");
    el.classList.remove("navhide");
    el.classList.add("navshow");
  }
  render() {
    return (
      <div>
        <div>
          <h2 className="text-center divFadeInD">Find Me on the following Social Media</h2>
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
          <form onSubmit={this.sendMail}>
            <div className="divFadeInU">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input onChange={e=>this.setState({name: e.target.value})} value={this.state.name} className="form-control contactInput" id="name" type="text" required/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={e=>this.setState({email: e.target.value})} value={this.state.email} className="form-control contactInput" id="email" type="text" required/>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea onChange={e=>this.setState({message: e.target.value})} value={this.state.message} className="form-control contactInput" id="message" type="textarea" required/>
              </div>
              <br/>
            </div>
            <div className="text-center divFadeInU">
              <button style={buttonWidth} type="submit" className="downloadBtn"><h4>Submit</h4></button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const textBox = {
  backgroundColor: 'grey',
  border: '0px solid grey'
}

const iconSize = {
  fontSize: '40px',
  padding: '5px',
}

const buttonWidth = {
  width: '200px'
}
