// Write your JS code here

import {Component} from 'react'

import './index.css'

class Home extends Component {
  renderNavBar = () => (
    <nav className="nav-bar">
      <div className="nav-bar-sm">
        <div className="nav-bar-top-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="home-logo-1"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="home-logout-icon"
          />
        </div>
        <div className="nav-bar-bottom-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="home-icon"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="home-icon"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="home-icon"
          />
        </div>
      </div>
      <div className="nav-bar-md">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="home-logo-2"
        />
        <div className="nav-items-container">
          <ul className="nav-list">
            <li> Home </li>
            <li> Products </li>
            <li> Cart </li>
          </ul>
          <button type="button" className="logout-button">
            Logout
          </button>
        </div>
      </div>
    </nav>
  )

  renderHome = () => (
    <div className="home-page">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-image"
      />
      <div className="home-content">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <p className="home-paragraph">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the sessions new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
    </div>
  )

  render() {
    return (
      <>
        {this.renderNavBar()}
        {this.renderHome()}
      </>
    )
  }
}

export default Home
