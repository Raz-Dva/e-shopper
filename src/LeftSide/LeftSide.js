import React from 'react';
import  {NavLink } from "react-router-dom";

class LeftSide extends React.Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="left-sidebar">
                    <h2>Category</h2>
                    <div className="panel-group category-products" id="accordian">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                        <span className="badge pull-right">
                                            <i className="fa fa-plus" />
                                        </span>Sportswear</a>
                                </h4>
                            </div>
                            <div id="sportswear" className="panel-collapse collapse">
                                <div className="panel-body">
                                    <ul>
                                        <li><NavLink to="/sportSwearNike" activeClassName="active">Nike </NavLink></li>
                                        <li><NavLink to="/sportSwearAdidas" activeClassName="active">Adidas </NavLink></li>
                                        <li><NavLink to="/sportSwearPuma" activeClassName="active">Puma</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                                        <span className="badge pull-right"><i className="fa fa-plus" /></span>
                    Mens
                  </a>
                                </h4>
                            </div>
                            <div id="mens" className="panel-collapse collapse">
                                <div className="panel-body">
                                    <ul>
                                        <li><NavLink to="/fendi" activeClassName="active">Boss</NavLink></li>
                                        <li><NavLink to="/guess" activeClassName="active">Guess</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                                        <span className="badge pull-right"><i className="fa fa-plus" /></span>
                    Womens
                  </a>
                                </h4>
                            </div>
                            <div id="womens" className="panel-collapse collapse">
                                <div className="panel-body">
                                    <ul>

                                        <li><NavLink to="/valentino" activeClassName="active">Valentino</NavLink></li>
                                        <li><NavLink to="/dior" activeClassName="active">Dior</NavLink></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <NavLink to="/kids" activeClassName="active">Kids</NavLink>
                                </h4>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <NavLink to="/sportadidas" activeClassName="active">Fashion</NavLink>
                                </h4>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title"><NavLink to="/sportadidas" activeClassName="active">Households</NavLink></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LeftSide;