import React, { Component } from 'react';
import Header from '../../components/header';
// import Button from '../../components/button';
import Footer from '../../components/footer';
import HamburgerMenu from '../../components/hamburger-menu';
import GridTile from './grid-tile';
import {Redirect} from 'react-router-dom';
import { Link } from 'react-scroll';
import Image1 from '../../assets/degree.png';
import Image2 from '../../assets/asset-53-6-x@2x.png';
import Image3 from '../../assets/medical.png';
import Image4 from '../../assets/tooth.png';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import * as firestore from '../../firebase.js';

import './home.css';

export default class Homepage extends Component {

  constructor() {
    super();
    this.state={
      authentication: false,
      redirectTo: '',
      formOpen: false,
      contact: '',
      name: '',
      nameError: false,
      contactError: false,
      email:''
    }
  }

  componentDidMount() {
   var self = this;

    window.scrollTo(0, 0);
    if(!sessionStorage.getItem("userVisited")){
     sessionStorage.setItem("userVisited", "true");
     setTimeout(() => {
      self.setState({
       formOpen: true
      });
     }, 10000);
    }
  }

  authentication(e) {
    let routeString = e.currentTarget.dataset.category.replace(/ .*/,'');
    this.setState({authentication: true, redirectTo: routeString});
  }

  validateForm(){
   let name=false, contact=false;

   if(this.state.name.length<3){
    this.setState({
     nameError: true
    });
    name=true;
   }

   if(this.state.contact.length!==10){
    this.setState({
     contactError: true
    });
    contact=true;
   }

   if(name || contact){
    return false;
   }else return true;

  }

  handleSubmit = () => {
    if(this.validateForm()){
     firestore.saveData(this.state);
     this.handleClose();
    }
  };

  handleClose = () => {
    this.setState({ formOpen: false });
  };

  handleContactChange = (e) => {
   if(!isNaN(e.target.value)){
    this.setState({
     contact: e.target.value, contactError: false
    });
   }
  }

  handleNameChange = (e) => {
   this.setState({
    name: e.target.value, nameError: false
   });
  }

  handleEmailChange = (e) => {
   this.setState({
    email: e.target.value, nameError: false
   });
  }


  render() {
    if (this.state.authentication) {
      return <Redirect push to={this.state.redirectTo} />;
    }
    return (
      <div>
        <Header/>
        <HamburgerMenu
          mode="home"
        />
        <div id="jumbotron" className="home__jumbotron">
          {/* <img className="home__jumbotron-top-right" src={require('../../assets/group-17@2x.png')} alt=""/>
          <img className="home__jumbotron-bottom-left" src={require('../../assets/0101010@2x.png')} alt=""/>
          <img className="bannerLogo" src={require('../../assets/logo@2x.png')} alt=""/> */}
            <div className="home__jumbotron-text">
              <div>
               <h1>Welcome To SS Consultancy</h1>
               <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
              </div>
            </div>
          <div id="arrowDown">
            <Link smooth={true} offset={-54} to="tools">
              <i className="material-icons white">keyboard_arrow_down</i>
            </Link>
          </div>
        </div>
        <div id="tools" className="home__tools-resources">
          <span>LIST OF COLLEGES</span>
          <div className="graySep"></div>
          <div className="home__tools-resources__grid">
            <GridTile
              clickable
              onClick={this.authentication.bind(this)}
              src={Image1}
              heading="Engineering Colleges"
              body=""
             />
            <GridTile
              clickable
              onClick={this.authentication.bind(this)}
              src={Image2}
              heading="Management Colleges"
              body=""
            />
            <GridTile
              clickable
              onClick={this.authentication.bind(this)}
              src={Image3}
              heading="Medical Colleges"
              body=""
            />
             <GridTile
              clickable
              onClick={this.authentication.bind(this)}
              src={Image4}
              heading="Dental Colleges"
              body=""
            />
          </div>
        </div>
        <div id="courses">
          <span>LIST OF ALL COURSES</span>
          <div className="graySep"></div>
          <div className='course-list'>
            <p>MBBS</p>
            <p>BAMS</p>
            <p>BDS</p>
            <p>B.Tech / Engineering</p>
            <p>Pharma D</p>
            <p>B Pharma</p>
            <p>M Pharma</p>
            <p>D Pharma</p>
            <p>BSc Nursing</p>
            <p>Diploma Nursing (GNM)</p>
            <p>Post Basic Nursing</p>
            <p>MSc Nursing</p>
            <p>Physiotherapy (BPT)</p>
            <p>Master in Hospital Administration (MHA)</p>
            <p>BASLP</p>
            <p>Hotel Management</p>
            <p>BBA Aviation</p>
            <p>BSc Fashion Designing</p>
            <p>Architecture (B.ARCH)</p>
            <p>BCA</p>
            <p>BBM</p>
            <p>B.COM</p>
            <p>BSc Cardiac Technology</p>
            <p>BSc Perfusion Technology</p>
            <p>BSc Operation Theatre Technology</p>
            <p>BSc Respiratory Care Technology</p>
            <p>BSc Anaesthesia Technology</p>
            <p>BSc Renal Dialysis</p>
            <p>BSc Medical Laboratory Technology</p>
            <p>BSc Optometry</p>
            <p>Bachelor in Public Health</p>
            <p>Bachelor in Hospital Administration (BHA)</p>
           </div>
        </div>
        <div id="contactUs" className="home__about-us">
          <div className="home__about-us__title">
            CONTACT US
          </div>
          <div className="home__about-us__body">
            Providing consulting solutions that makes your life easier
          </div>
          <div className="home__about-us__button">
            <div>
             Email: ssconsultlnacy@gmail.com
            </div>
            <div>
             Call: 1234567890
            </div>

          </div>
        </div>
        <Footer/>
        <Dialog
          open={this.state.formOpen}
          aria-labelledby="form-dialog-title"
          onClose={this.handleClose}
          TransitionComponent='Fade'
          transitionDuration={3000}
        >
          <DialogTitle id="form-dialog-title">Register</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              value={this.state.name}
              onChange={this.handleNameChange}
              fullWidth
              error={this.state.nameError}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              onChange={this.handleEmailChange}
              value={this.state.email}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="number"
              label="Contact Number"
              value={this.state.contact}
              onChange={this.handleContactChange}
              fullWidth
              error={this.state.contactError}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Subscribe
            </Button>
          </DialogActions>
          
        </Dialog>
      </div>
    );
  }
}
