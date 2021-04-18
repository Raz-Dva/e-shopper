import React from 'react';
import Home from '../Home/CardList';
import Recommended from '../Recommended/Recommended';
import Discounts from '../Discounts/Discounts';
import SportNike from '../Sportswear/SportswearNike';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  withRoute
} from "react-router-dom";

class Showcase extends React.Component {
  render() {
    return (
      <div className="col-sm-9 padding-right">
        <div className="features_items">
          <Switch>
            <Route exact path="/" render={(props) => {
              return (
                <Home
                  produtctsList={this.props.produtctsList}
                />
              )
            }} />
            <Route path="/decommended" component={Recommended} />
            <Route path="/discounts" component={Discounts} />
            <Route path="/sportnike" component={SportNike} />
            {/* <Route path="/sportadidas" component={SportAdidas} /> */}

          </Switch>
        </div>
      </div>
    )
  }
};

export default Showcase;