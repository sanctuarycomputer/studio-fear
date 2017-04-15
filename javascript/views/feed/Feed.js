import React, { Component } from 'react';
import Index from './Index';
import Gallery from './Gallery';

function cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

class Feed extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // seed image
      activeImage: props.defaultImage ? props.defaultImage : props.images[0],
      indexVisible: false,
    };

    this.handleExit = this.handleExit.bind(this);
    this.handleShowIndex = this.handleShowIndex.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
  }

  handleExit() {
    this.setState({indexVisible: false});
  }

  handleShowIndex() {
    this.setState({indexVisible: true});
  }

  handleChangeImage(image) {
    this.setState({activeImage: image, indexVisible: false});
  }

  handleCallback(useIndex, indexIsActive) {
    if (useIndex) {
      indexIsActive ? this.handleExit() : this.handleShowIndex();
    } else {
      this.props.onExit();
    }
  }

  _renderCopy(useIndex, indexIsActive) {
    let copy = 'EXIT';
    if (useIndex) {
      copy = indexIsActive ? 'IMAGES' : 'INDEX';
    }
    return copy;
  }

  _renderButton(useIndex, indexIsActive) {
    return (
      <div
        className='index-button exit-button h6 exil pt1 px2'
        style={{zIndex: 99}}
        onClick={this.handleCallback.bind(this, useIndex, indexIsActive)}
      >{this._renderCopy(useIndex, indexIsActive)}</div>
    );
  }

  render() {
    const { activeImage, indexVisible } = this.state;
    const { defaultImage, images, index } = this.props;
    let cleanedImages = cleanArray(images);
    return (
      <div className='feed feed-page fade-when-menu-active'>
        {this._renderButton(index, indexVisible)}
        {indexVisible ?
          <Index images={cleanedImages} handleChangeImage={this.handleChangeImage}/> :
          <Gallery images={cleanedImages} hero={activeImage} handleChangeImage={this.handleChangeImage}/>
        }
      </div>
    );
  }
}

Feed.defaultProps = {
  defaultImage: null,
  index: true,
  onExit: () => {
    console.log('hey there')
  },
};

export default Feed;
