// Write your JS code here

import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isResponse: false, value: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFail = data => {
    this.setState({
      isResponse: true,
      value: data.error_msg,
    })
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, options)
    const data = await response.json()

    console.log(response)

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFail(data)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <div className="input-field">
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="input"
          value={username}
          onChange={this.onChangeUsername}
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <div className="input-field">
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="input"
          value={password}
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  render() {
    const {isResponse, value} = this.state

    return (
      <div className="login">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo-sm"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="form" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo-md"
          />
          {this.renderUsernameField()}
          {this.renderPasswordField()}
          <button type="submit" className="button">
            Login
          </button>
          {isResponse && <p className="error-message"> {value} </p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
