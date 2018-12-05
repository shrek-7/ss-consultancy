import React, {Component} from 'react';

import './checkbox.css';

export default class Checkbox extends Component {
  render() {
    return (
      <label className="checkbox__label">
        {this.props.label}
        <input type="checkbox"/>
        <span className="checkmark"></span>
      </label>
    );
  }
}
