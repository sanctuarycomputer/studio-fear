import React, { Component } from 'react';
import _ from 'lodash';
import IndexLink from './IndexLink';

export default class Index extends Component {
  constructor() {
    super();
    this.renderLinks = this.renderLinks.bind(this);
  }

  renderLinks(images) {
    return _.map(images, (image, i) => {
      return <IndexLink key={i} image={image} handleChangeImage={this.props.handleChangeImage}/>;
    });
  }

  render() {
    return (
      <div className='feed-index'>
        <div className='px2 mt3'>
          {this.renderLinks(this.props.images)}
        </div>
      </div>
    );
  }
}
