import React, { Component } from 'react';

import './button.css';

export default class Button extends Component {
  style = {
    background:(this.props.icon)?'#fff':'#2b343e',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  };
  render() {
    return (
      <button
        style={(this.props.type==='rounded')?this.style:{s:''}}
        className={(this.props.type)?`${this.props.type} button`:'button'}
        onClick={this.props.onClick}>
        {this.props.label}
        <img src={this.props.icon} alt=""/>
      </button>
    );
  }
}
