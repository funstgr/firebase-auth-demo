import React from 'react';

class Button extends React.PureComponent {
  render() {
    const { onClick, label, className } = this.props;
    const usr = {
      email: 'test_email3@google.com',
      password: '12345678',
      lastName: 'Test',
      firstName: 'Test',
    };

    return (
        <div className="button-reviews">
            <button className={className} onClick={onClick}>{label}</button>
        </div>
    );
  }
}

export default Button;
