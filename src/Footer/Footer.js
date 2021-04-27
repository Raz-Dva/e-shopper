import React from 'react';
import {
  NavLink
} from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="companyinfo">
                  <h2><span>e</span>-shopper</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed
                    do eiusmod tempor
                      </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <div className="single-widget">
                  <h2>Navigation</h2>
                  <ul className="nav nav-pills nav-stacked">
                  <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/recommended" activeClassName="active">Recommended</NavLink></li>
                    <li><NavLink to="/discounts" activeClassName="active">Discounts</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <p className="pull-left">
                Copyright © 2013 E-SHOPPER Inc. All rights reserved.
                  </p>
              <p className="pull-right">
                Designed by
                    <span>Themeum</span>
              </p>
            </div>
          </div>
        </div>
      </footer>)
  }

};
export default Footer
