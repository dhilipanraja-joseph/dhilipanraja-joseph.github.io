import React, { Component } from 'react'
import NavBar from './NavBar'

export default class App extends Component {
  // _handleScroll(e) {
  //   let scrollTop = e.srcElement.body.scrollTop;
  //   console.log("Scrolling!:", scrollTop);
  // }
  //
  // componentDidMount() {
  //   window.addEventListener('scroll', this._handleScroll);
  //   // console.log("hello");
  //   //  const list = ReactDOM.findDOMNode(this.refs.list)
  //   //  list.addEventListener('scroll', this._handleScroll);
  // }
  //
  // componentWillUnmount() {
  //   //  const list = ReactDOM.findDOMNode(this.refs.list)
  //   //  list.removeEventListener('scroll', this._handleScroll);
  // }
  render(){
    return (
      <div>
        <NavBar />
        <div className="container" style={{marginTop: '55px'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
