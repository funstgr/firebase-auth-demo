import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../Logo';

class HomeLink extends React.Component {
  render() {
    const { onClick, location } = this.props;
    return (
        <a href='#' className="brand-logo" onClick={onClick('signin')} >
            <Logo className="icon-logo"/>
            <div className="inline logo" >Gastronomy.com</div>
        </a>
    );
  }
}

export default HomeLink;
