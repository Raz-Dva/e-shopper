import React from 'react';
import Card from '../Card/Card';
import CardDetails from '../CardDetails/CardDetails';
import Recommended from '../Recommended/Recommended';
import Discounts from '../Discounts/Discounts';
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
                <Card
                  produtctsList={this.props.produtctsList.featuresItems}
                />
              )
            }} />
            <Route path="/recommended" component={Recommended} />
            <Route path="/discounts" component={Discounts} />
            <Route path="/card/:id" render={(props) => {
              return (
                <CardDetails
                  produtctsList={this.props.produtctsList}
                />
              )
            }} />
            <Route path="/sportnike" render={(props) => {
              return (
                <Card
                  produtctsList={this.props.produtctsList.sportSwearNike}
                />
              )
            }} />
            
            <Route path="/sportadidas" render={(props) => {
              return (
                <Card
                  produtctsList={this.props.produtctsList.sportSwearAdidas}
                />
              )
            }} />
            <Route path="/sportpuma" render={(props) => {
              return (
                <Card
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