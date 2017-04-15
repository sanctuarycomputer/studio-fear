import React, { Component } from 'react';

export default class IndexLink extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleChangeImage(this.props.image);
  }

  render() {
    return (
      <a className="pointer text-decoration-none feed-links" onClick={this.handleClick}>
        <div className="block image-data pt1 flex col-12 justify-between">
          <div className="nowrap inline-block exil image-title">{this.props.image.image_title}</div>
          <div className="px2 black-line-container">
            <div className="black-line"></div>
          </div>
          <div className="inline-block exil">{this.props.image.image_date}</div>
        </div>
      </a>
    );
  }
}
