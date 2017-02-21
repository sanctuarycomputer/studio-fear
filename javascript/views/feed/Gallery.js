import React, { Component } from 'react';
import _ from 'lodash';
import GalleryImage from './GalleryImage';
import GalleryWaypoint from './GalleryWaypoint';

export default class Gallery extends Component {
  constructor() {
    super();
    this.renderWaypoints = this.renderWaypoints.bind(this);
  }

  renderWaypoints(images) {
    return _.map(images, (image, i) => {
      return <GalleryWaypoint key={i} image={image} handleChangeImage={this.props.handleChangeImage} />;
    });
  }

  render() {

    return (
      <div className='feed-gallery'>
        <GalleryImage {...this.props.hero}/>
        <div style={{minHeight: '110vh', position: 'relative'}}>
          {this.renderWaypoints(this.props.images)}
        </div>
        <div style={{minHeight: '100vh'}} />
      </div>
    );
  }
}
