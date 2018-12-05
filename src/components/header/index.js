import React, {Component} from 'react';
import Button from '../button';
import { Link, animateScroll as scroller } from 'react-scroll';
import {Link as MainLink} from 'react-router-dom';

import './header.css';

export default class Header extends Component {

  componentDidMount() {
    if (window.location.hash==="#/AppProfile") {
      document.querySelector('#headerLoginLink1').classList.add("invisible");
      document.querySelector('#headerLoginLink2').classList.add("invisible");
    }
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element',{
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }
  hamburgerFunction() {
    document.querySelector("#hamburgerMenu").classList.toggle("hamburger-open");
  }

  login() {}

  render() {
    return (
      <div className="header-holder">
        <div onMouseOut={this.hamburgerFunction.bind(this)} onMouseOver={this.hamburgerFunction.bind(this)} className="header__hamburger">
          <i className="material-icons white">menu</i>
        </div>
        <div className="header">
          <div className="header__logo">
            <MainLink to="/home">
            <span>SS CONSULTANCY SERVICES</span>
          </MainLink>
        </div>
        <div className="header__login">
        {!this.props.hideLinks && 
          <Link smooth={true} offset={-54} to="tools">
            <span id="headerLoginLink1">COLLEGES IN BANGALORE</span>
          </Link>}
          {!this.props.hideLinks &&
          <Link smooth={true} offset={-54} to="contactUs">
            <span id="headerLoginLink2">CONTACT US</span>
          </Link>}
        </div>
      </div>
      </div>
    );
  }
}
