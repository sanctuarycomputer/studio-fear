import React, { Component } from 'react';

export default class GalleryImage extends Component {

  render() {
    return (
      <div className='feed-hero-container fixed'>
        <div id='feed-image' className='feed-hero-image bwimage' style={{backgroundImage: `url(${this.props.image.url})`}} />
      </div>
    );
  }
}
