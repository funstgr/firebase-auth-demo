import React from 'react';
import { render } from 'react-dom';
import ReactSVG from 'react-svg';
import logo from '../../../svg/wine-glass.svg';

class Logo extends React.Component {
  render() {
    return (
      <object data={logo} type="image/svg+xml" />
    );
  }
}

export default Logo;
