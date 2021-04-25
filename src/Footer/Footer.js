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
                    <li><a href="#">Company Information</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Store Location</a></li>
                    <li><a href="#">Affillate Program</a></li>
                    <li><a href="#">Copyright</a></li>
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
