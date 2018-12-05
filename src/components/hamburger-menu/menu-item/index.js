import React, {Component} from 'react';

import './menu-item.css';

export default class MenuItem extends Component {

  onMouseDown(e) {
    if (this.props.active) {
      e.stopPropagation();
      var x = document.getElementsByClassName('menu-item');
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("selected");
      }
      e.currentTarget.classList.add("selected");
    }
  }

  render() {
    return (
      <div
        id={this.props.id}
        onMouseDown={e=>this.onMouseDown(e)}
        onClick={this.props.onClick}
        className={(this.props.active)?"menu-item active":"menu-item"}
      >
        <span className="menu-item__title">{this.props.title}</span>
        <img src={this.props.icon} alt=""/>
      </div>
    );
  }
}
