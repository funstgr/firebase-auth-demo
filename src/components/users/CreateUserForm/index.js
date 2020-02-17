import React from 'react';
import { connect } from 'react-redux';

class CreateUserForm extends React.Component {
    state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    }

      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value,
        });
      }

      handleSubmit = (e) => {
        const { handleSubmit } = this.props;
        e.preventDefault();
        handleSubmit(this.state);
      }

      handleEmailFocus = (e) => {
        const { handleFocus, user } = this.props;
        e.preventDefault();
        handleFocus(this.state);
      }

      render() {
        const {
          authError, buttonLabel, formHeader, user,
        } = this.props;
        const email = user ? `Email:${user.username}` : 'Email';
        const firstname = user ? `First Name:${user.firstname}` : 'First Name';
        const lastname = user ? `Last Name:${user.lastname}` : 'Last Name';
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">{formHeader}</h5>
                    <div className="input-field">
                    <label htmlFor="email">{email}</label>
                    <input type="email" id='email' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                    <label htmlFor="firstName">{firstname}</label>
                    <input type="text" id='firstName' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                    <label htmlFor="lastName">{lastname}</label>
                    <input type="text" id='lastName' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">{buttonLabel}</button>
                    <div className="center red-text">
                        { authError ? <p>{authError}</p> : null }
                    </div>
                    </div>
                </form>
            </div>
        );
      }
}

export default CreateUserForm;
