import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Footer from '../../components/footer';

import { Link } from 'react-router-dom';

import * as firestore from '../../firebase.js';

import './contact.css';

// var config = {
//  apiKey: "AIzaSyDab8a3gbGIaK-tK_sPkdShlHcUYRQaIYY",
//  authDomain: "ss-consultancy.firebaseapp.com",
//  databaseURL: "https://ss-consultancy.firebaseio.com",
//  projectId: "ss-consultancy",
//  storageBucket: "ss-consultancy.appspot.com",
//  messagingSenderId: "240871765623"
// };
// firebase.initializeApp(config);

// var messageRef = firebase.database().ref('messages');

export default class Contact extends Component {


 constructor() {
  super();
  this.state={
    contact: '',
    name: '',
    nameError: false,
    contactError: false,
    email:'',
    isRegistered: false
  }
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
     console.log(this.state);
    firestore.saveData(this.state);
    this.setState({
     isRegistered: true
    })
   }
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
    return (
      <div className='contact-outer-wrap'>

      <main className="contact-wrapper">
          <div className='form-container'>
            {this.state.isRegistered ? 
            <section>
             <h1>Thank You for registering with us !</h1>
             <p>we will contact you at the earliest.</p>

             <br/>
             <br/>
             <br/>
             <Link to='/home'>
               <Button variant="outlined" color="primary">
                Home
              </Button>
            </Link>
            </section> :
            <section>
             <div>
              <h1>Contact Us</h1>
              <p>Please provide the following details.</p>
             </div>
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
            <br/>
            <br/>
            <br/>
            <Button variant="outlined" onClick={this.handleSubmit} color="primary">
              Register
            </Button>
            &nbsp;
            &nbsp;
            <Link to='/home'>
               <Button variant="outlined" color="secondary">
                Back
              </Button>
            </Link>
          </section>
            }
            
            </div>
          </main>
          <div className='footer-container'>
              <Footer />
            </div>
          </div>
          );
  }
}
