import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    return (
      <div className="login-bg-container">
        <div className="login-responsive-container">
          <div className="login-image-container">
            <img
              src="https://res.cloudinary.com/do4v7miwh/image/upload/v1656924786/MiniProjects/BookHub/login_image.png"
              alt="website login"
              className="login-img"
            />
          </div>
          <div className="login-content-container">
            <form onSubmit={this.handleSubmit} className="form-container">
              <img
                src="https://res.cloudinary.com/do4v7miwh/image/upload/v1656924684/MiniProjects/BookHub/website_logo.png"
                alt="login website logo"
                className="website-logo"
              />
              <label htmlFor="username" className="label">
                Username*
              </label>
              <input
                type="text"
                className="input-field"
                id="username"
                value="username"
                placeholder="username"
                autoComplete="off"
              />
              <label htmlFor="password" className="label">
                Password*
              </label>
              <input
                type="password"
                className="input-field"
                id="password"
                value="password"
                placeholder="password"
              />
              <button className="login-btn" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
