import React, {Component} from 'react';
import MenuItem from './menu-item';
import HomeIcon from '../../assets/shape@2x.png';
import ApplicationOnboarding from '../../assets/combined-shape@2x.png';
import Call from '../../assets/phone-receiver.png';
import {Link as MainLink} from 'react-router-dom';

import './hamburger-menu.css';

export default class HamburgerMenu extends Component {
  constructor(props){
    super(props);
    this.state={
      out:false,
    }
  }

  componentDidMount() {
    this.activation();
  }

  componentDidUpdate() {
    setTimeout(
      ()=>{
        this.activation();
      }, 1000
    );
  }

  activation() {
    if (window.location.hash==="#/AppProfile") {
      document.getElementById('appProfileLink').classList.add("selected");
    }
    else if (window.location.hash==="#/home") {
      document.getElementById('homeLink').classList.add("selected");
    }
  }

  hamburgerFunction() {
    this.onMouseOver();
  }

  onMouseOver() {
    document.querySelector("#hamburgerMenu").classList.add("hamburger-open");
    this.setState({out:false});
  }

  onMouseOut() {
    document.querySelector("#hamburgerMenu").classList.remove("hamburger-open");
    this.setState({out:true});
    this.clearAll();
  }
  clearAll() {
    setTimeout(
      ()=>{
        if (this.state.out) {
          var x = document.getElementsByClassName('menu-item');
          for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("selected");
          }
        }
      }, 1000
    );
  }
  hawkeye(e) {
    window.open (' http://hawkeye.appsec.corporate.t-mobile.com:3000','_blank');
  }

  render() {
    return(
      <div
        onMouseOver={event=>this.onMouseOver()}
        onMouseOut={event=>this.onMouseOut()}
        id="hamburgerMenu"
        className={(this.props.mode==="home")?"home hamburger-menu":"hamburger-menu"}>
        <MainLink to="/home">
          <MenuItem id="homeLink" active={true} title="Home" icon={HomeIcon} />
        </MainLink>
        <MainLink to="/Engineering">
          <MenuItem id="appProfileLink" active={true} title="Explore Colleges" icon={ApplicationOnboarding} />
        </MainLink>
        <MainLink to="/contact">
          <MenuItem id="contactLink" active={true} title="Register with us" icon={Call} />
        </MainLink>
      </div>
    );
  }
}
