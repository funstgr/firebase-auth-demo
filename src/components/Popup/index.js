import React from 'react';
import './css/popup.css';

class Popup extends React.Component {
  render() {
    const {
      header, message, responseStatus, closePopup,
    } = this.props;
    const msgClass = responseStatus === 1 ? 'pu-message green' : 'pu-message red';
    return (
    <div className='popup'>
        <div className='popup_inner'>
          <div className='pu-header'>{header}</div>
          <h1 className={msgClass}>{message}</h1>
          <button className='pu-button' onClick={closePopup}>X</button>
        </div>
    </div>
    );
  }
}

export default Popup;
