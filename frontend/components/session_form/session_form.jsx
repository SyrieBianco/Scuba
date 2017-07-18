import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
  e.preventDefault();
  const user = Object.assign({}, this.state);
  this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navFormLink() {
    if (this.props.formType === 'signin') {
      return <Link to="/signup"> Sign Up </Link>;
    } else {
      return <Link to="/signin"> Sign In </Link>;
    }
  }

  formHeader() {
    if (this.props.formType === 'signin') {
      return "Sign In";
    } else {
      return "Sign Up";
    }
  }


  render() {

    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <div className="session-form">
            <h1 className="session-form-header">{this.formHeader()}</h1>
            <label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="session-form-input"
                />
            </label>
            <label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-form-input"
                />
            </label>
            <input type="submit" value="Submit"
              className="session-form-submit"/>
          </div>
        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);









<nav className= "session-form-nav">{this.navFormLink()}</nav>
