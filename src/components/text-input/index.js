import React, { Component } from 'react';

import './text-input.css';


export default class TextInput extends Component {

  style={
    width: this.props.width?this.props.width:'90%',
    height: this.props.height?this.props.height:'44px',
    backgroundColor: '#ffffff',
    border: 'solid 1px #e2e2e2',
    padding:'10px',
  }
  input = <input
    className="text-input__input"
    placeholder={this.props.hintText}
    style={this.style}
  />
  textarea = <textarea
    className="text-input__input"
    placeholder={this.props.hintText}
    style={this.style}
   />

  render() {
    return(
      <div className="text-input">
        <div>
          <span className="text-input__label-text">{this.props.label}</span>
          <span className="text-input__label-required">{(this.props.required)?'*':''}</span>
        </div>
        {(this.props.textarea)?this.textarea:this.input}
      </div>
    );
  }
}
