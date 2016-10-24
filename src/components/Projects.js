import React, { Component } from 'react'

export default class Projects extends Component {
  componentDidMount(){
    var el = document.getElementById("mainNav");
    el.classList.remove("navhide");
    el.classList.add("navshow");
  }
  render() {
    return (
      <div style={proto}>
        <div style={divMargin} className="divFadeInD row">
          <div style={proDesc} className="projecDesc col-md-6">
            <h3>BookShare</h3>
            <hr/>
            <p>A React/Redux App with Responsive UI. Online Book Sharing App.</p>
            <h4 style={sth4}>Built Using</h4>
            <p>REACT - REDUX - MATERIAL UI - EXPRESS - S3 - STRIPE - WEBPACK - AIRBNB STYLE GUIDE</p>
            <hr/>
          </div>
          <div style={demoImg} className="projectDemo col-md-6">
            <img className="img-responsive imgHighlight" src="bookshare-main.png" alt=""/>
            <p>BOOKSHARE</p>
            <a>AppLink</a><span> | </span>
            <a href="https://github.com/FigsAndRice/BookShare-App" target="_blank">GitHubLink</a>
          </div>
        </div>
        <div style={divMargin} className="divFadeInD row">
          <div style={proDesc} className="projecDesc col-md-6">
            <h3>NewsRant</h3>
            <hr/>
            <p>A React/Flux App. To find lastest news articles and share your thoughts.</p>
            <h4 style={sth4}>Built Using</h4>
            <p>REACT - FLUX - BOOTSTAP - EXPRESS - WEBPACK</p>
            <hr/>
          </div>
          <div style={demoImg} className="projectDemo col-md-6">
            <img className="img-responsive imgHighlight" src="newsrant-main.png" alt=""/>
            <p>NEWSRANT</p>
            <a>AppLink</a><span> | </span>
            <a href="https://github.com/dalime/NewsRant" target="_blank">GitHubLink</a>
          </div>
        </div>
        <div style={divMargin} className="divFadeInD row">
          <div style={proDesc} className="projecDesc col-md-6">
            <h3>Pricer</h3>
            <hr/>
            <p>A React App. To search for products price from multiple online stores and compare.</p>
            <h4 style={sth4}>Built Using</h4>
            <p>REACT - EXPRESS - NODEJS - WEBPACK - AWS - EBAY API - WEBSCRAP</p>
            <hr/>
          </div>
          <div style={demoImg} className="projectDemo col-md-6">
            <img className="img-responsive imgHighlight" src="pricerapp-main.png" alt=""/>
            <p>PRICER</p>
            <a>AppLink</a><span> | </span>
            <a  href="https://github.com/dhilipanraja-joseph/search_app" target="_blank">GitHubLink</a>
          </div>
        </div>
        <div style={divMargin} className="divFadeInD row">
          <div style={proDesc} className="projecDesc col-md-6">
            <h3>MovieDate</h3>
            <hr/>
            <p>A Vanila-React App. That get you a random movie/TV show, which can be added to your watch list.</p>
            <h4 style={sth4}>Built Using</h4>
            <p>REACT - EXPRESS - NODEJS - IMDB API</p>
            <hr/>
          </div>
          <div style={demoImg} className="projectDemo col-md-6">
            <img className="img-responsive imgHighlight" src="moviedate-main.png" alt=""/>
            <p>MOVIEDATE</p>
            <a>AppLink</a><span> | </span>
            <a href="https://github.com/dhilipanraja-joseph/RandomMoviePicker" target="_blank">GitHubLink</a>
          </div>
        </div>
      </div>
    )
  }
}

const sth4 = {
  textDecoration: 'underline',
}

const demoImg = {
  marginTop: '40px'
}

const proto = {
  // width: '800px',
  margin: 'auto'
}

const divMargin = {
  textAlign: 'center',
  margin: '20px',
  marginBottom: '50px'
}

const imgShadow = {
  // marginTop: '50px',
  margin: 'auto',
  marginBottom: '10px',
  width: '350px',
  boxShadow: '0px 5px 15px #404040'
}

const proDesc = {
  textAlign: 'center'
}
