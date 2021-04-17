import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="companyinfo">
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

                <div class="footer-widget">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3">
                                <div class="single-widget">
                                    <h2>Service</h2>
                                    <ul class="nav nav-pills nav-stacked">
                                        {/* <li><a href="#">Online Help</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Order Status</a></li>
                                        <li><a href="#">Change Location</a></li>
                                        <li><a href="#">FAQ’s</a></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="single-widget">
                                    <h2>Quock Shop</h2>
                                    <ul class="nav nav-pills nav-stacked">
                                        {/* <li><a href="#">T-Shirt</a></li>
                                        <li><a href="#">Mens</a></li>
                                        <li><a href="#">Womens</a></li>
                                        <li><a href="#">Gift Cards</a></li>
                                        <li><a href="#">Shoes</a></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="single-widget">
                                    <h2>Policies</h2>
                                    <ul class="nav nav-pills nav-stacked">
                                        {/* <li><a href="#">Terms of Use</a></li>
                                        <li><a href="#">Privecy Policy</a></li>
                                        <li><a href="#">Refund Policy</a></li>
                                        <li><a href="#">Billing System</a></li>
                                        <li><a href="#">Ticket System</a></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="single-widget">
                                    <h2>About Shopper</h2>
                                    <ul class="nav nav-pills nav-stacked">
                                        {/* <li><a href="#">Company Information</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Store Location</a></li>
                                        <li><a href="#">Affillate Program</a></li>
                                        <li><a href="#">Copyright</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <p class="pull-left">
                                Copyright © 2013 E-SHOPPER Inc. All rights reserved.
            </p>
                            <p class="pull-right">
                                Designed by
              <span>Themeum</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }

};
export default Footer