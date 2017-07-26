import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        {/*<div className="logo" alt="zenefits-logo">*/}
        {/*</div>*/}
        <nav>
          <ul>
            <li>
                <Link to="/">Map</Link>
            </li>
            <li>
                <Link to="/intro">Instructions</Link>
            </li>            
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
