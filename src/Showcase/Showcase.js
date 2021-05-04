import React from 'react';
import Card from '../Card/Card';
import CardDetails from '../CardDetails/CardDetails';
import Recommended from '../Recommended/Recommended';
import Discounts from '../Discounts/Discounts';
import NotFound from '../NotFound/NotFound';

import {
  Switch,
  Route
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
                  category={'featuresItems'}
                />
              )
            }} />
            <Route exact path="/:category/:id" 
             render={(props) => {
              return (
                <CardDetails
                {...props}
                  produtctsList={this.props.produtctsList}                  
                />
              )
            }} 
            />
            <Route path="/recommended" render={(props) => {
              return (
                <Recommended
                  produtctsList={this.props.produtctsList}
                />
              )
            }} />
            <Route path="/discounts" render={(props) => {
              return (
                <Discounts
                  produtctsList={this.props.produtctsList}
                />
              )
            }} />
            
            <Route  path="/sportSwearNike" render={(props) => {
              return (
                <Card
                  produtctsList={this.props.produtctsList.sportSwearNike}
                  category={'sportSwearNike'}
                />
              )
            }} />
            
            <Route path="/sportSwearAdidas" render={(props) => {
              return (
                <Card
                  produtctsList={this.props.produtctsList.sportSwearAdidas}
                  category={'sportSwearAdidas'}
                />
              )
            }} />
            <Route path="/sportSwearPuma" render={(props) => {
              return (
                <Card
                  produtctsList={this.props.produtctsList.sportSwearPuma}
                  category={'sportSwearPuma'}
                />
              )
            }} />       
            <Route path="/bossMan" render={(props) => {
              return (
                <Card
                  produtctsList={this.props.produtctsList.bossMan}
                  category={'bossMan'}
                />
              )
            }} />   
            <Route path="/guessMan" render={(props) => {
              return (
                <Card
                  produtctsList={this.props.produtctsList.guessMan}
                  category={'guessMan'}
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