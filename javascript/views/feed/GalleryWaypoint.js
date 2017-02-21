import React, { Component } from 'react';

export default class GalleryWaypoint extends Component {

  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollPosition = window.pageYOffset;
    const yTop = this.waypoint.offsetTop;
    const yBottom = this.waypoint.offsetHeight + yTop;

    if (scrollPosition >= yTop && scrollPosition < yBottom) {
      this.props.handleChangeImage(this.props.image);
    }
  }

  render() {
    return (
      <div ref={(elem) => {this.waypoint = elem}} style={{height: '10vh', width: '100%'}} />
    );
  }
}
