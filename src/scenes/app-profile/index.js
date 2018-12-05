import React, { Component } from 'react';
import Header from '../../components/header/index';
import HamburgerMenu from '../../components/hamburger-menu/index';
import Footer from '../../components/footer';

import data from '../../data.json';

import './app-profile.css';

export default class AppProfile extends Component {
  constructor(){
    super()
    this.state={
    }
  }
  componentWillMount(){
    window.scrollTo(0, 0);
    
    setTimeout(()=>{
     document.querySelector('.college-list').classList.remove('hide');
    }, 300);

    switch(this.props.location.pathname){
     case '/Engineering' :
     this.setState({
      data: data.engineering,
      category: "Engineering Colleges"
     }); 
     break;
     case '/Management' : 
     this.setState({
      data: data.management,
      category: "Management Colleges"
     });
     break;
     case '/Medical' :
     this.setState({
      data: data.medical,
      category: "Medical Colleges"
     }); 
     break;
     case '/Dental' : 
     this.setState({
      data: data.dental,
      category: "Dental Colleges"
     });
     break;
    }
    
  }

  renderList = () =>{
   // if(this.state.data){
    return this.state.data.map(item => {
     return <li key={item} className="list-element">{item}</li>
    })
   // }
  }

  render() {
    return(
      <div className="app-profile">
        <Header hideLinks= {true}/>
        <HamburgerMenu/>
        <div className='list-container'>
         <h1>{this.state.category}</h1>
         <ul className='college-list hide'>
          {this.renderList()}
         </ul>
        </div>
        <section id="contactUs" className="home__about-us">
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
        </section>
        <Footer/>
      </div>
    );
  }
}
