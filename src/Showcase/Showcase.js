import React from 'react';
import CardList from '../CardList/CardList';
import Recommended from '../Recommended/Recommended';
import Discounts from '../Discounts/Discounts';
import SportNike from '../Products/Sportswear/SportswearNike';
import NotFound from '../NotFound/NotFound';

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
                <CardList
                  produtctsList={this.props.produtctsList.featuresItems}
                />
              )
            }} />
            <Route path="/recommended" component={Recommended} />
            <Route path="/discounts" component={Discounts} />
            <Route path="/sportnike" render={(props) => {
              return (
                <CardList
                  produtctsList={this.props.produtctsList.sportSwearNike}
                />
              )
            }} />
            <Route path="/sportadidas" render={(props) => {
              return (
                <CardList
                  produtctsList={this.props.produtctsList.sportSwearAdidas}
                />
              )
            }} />
            <Route path="/sportpuma" render={(props) => {
              return (
                <CardList
                  produtctsList={this.props.produtctsList.sportSwearPuma}
                />
              )
            }} />
            <Route  component={NotFound} />

          </Switch>
        </div>
      </div>
    )
  }
};

export default Showcase;