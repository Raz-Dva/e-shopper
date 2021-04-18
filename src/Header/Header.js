import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    withRoute
} from "react-router-dom";
class MainMenu extends React.Component {
    render() {
        return (
            <div className="mainmenu pull-left">
                <ul className="nav navbar-nav collapse navbar-collapse">
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/recommended" activeClassName="active">Recommended</NavLink></li>
                    <li><NavLink to="/discounts" activeClassName="active">Discounts</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
                </ul>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <>
                <header id="header">
                    <div className="header-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="logo pull-left">
                                        <a href="/"><img src="assets/images/home/logo.png" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                        </button>
                                    </div>                                    
                                        <MainMenu />                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </header> </>
        )
    }
}

export default Header;