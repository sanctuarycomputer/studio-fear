import React, { Component } from 'react';
import Index from './Index';
import Gallery from './Gallery';

export default class Feed extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // seed image
      activeImage: props.images[0],
      indexVisible: false,
    };

    this.handleExit = this.handleExit.bind(this);
    this.handleShowIndex = this.handleShowIndex.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
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

  render() {
    const { activeImage, indexVisible } = this.state;
    const { images } = this.props;

    return (
      <div className='feed feed-page fade-when-menu-active'>
        <div
          className='index-button exit-button h6 exil pt1 px2'
          style={{zIndex: 99}}
          onClick={indexVisible ? this.handleExit : this.handleShowIndex}
        >{indexVisible ? 'IMAGES' : 'INDEX'}</div>
        {indexVisible ?
          <Index images={images} handleChangeImage={this.handleChangeImage}/> :
          <Gallery images={images} hero={activeImage} handleChangeImage={this.handleChangeImage}/>
        }
      </div>
    );
  }
}
