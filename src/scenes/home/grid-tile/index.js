import React, { Component } from 'react';

import './grid-tile.css';

export default class GridTile extends Component {

  buttonStyle={
    border:'1px solid #e20074',
  }

  render() {
    return (
      <div data-category={this.props.heading} onClick={this.props.onClick} className={(this.props.clickable)?'clickable grid-tile':'grid-tile'}>
        <img alt="" src={this.props.src}/>
        <span className="grid-tile__heading">{this.props.heading}</span>
        {/* <span className="grid-tile__body">{this.props.body}</span> */}
      </div>
    );
  }
}
