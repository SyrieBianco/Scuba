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
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleSubmit(e) {
  e.preventDefault();
  const user = Object.assign({}, this.state);
  this.props.processForm(user);
  }

  handleDemo(e) {
  e.preventDefault();
  const demoUser = {username: "JacquesCousteau", password: "password"};
  this.props.signin(demoUser);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
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

  componentWillReceiveProps(nextProps) {
     if (nextProps.loggedIn) {
       this.props.history.push('/');
     }
   }

   renderErrors(){
         return(
             <ul className="session-errors">
                 {this.props.errors.map( (error, i) => (
                     <li key={`error-${i}`}>
                         {error}
                     </li>
                 ))}
             </ul>
         );
     }


  render() {

    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <div className="session-form">
            <h1 className="session-form-header">{this.formHeader()}</h1>
              <button
                type="buttons"
                className="session-form-submit"
                onClick={this.handleDemo}>
                Demo Log In
              </button>
              <div className='session-form-inputs'>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="username"
                  className="session-form-input"
                  />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="password"
                  className="session-form-input"
                  />
              </div>
            <label className="login-errors">{ this.renderErrors() }</label>
            <input type="submit" value="Submit"
              className="session-form-submit"/>

          </div>
        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);









// <nav className= "session-form-nav">{this.navFormLink()}</nav>
