// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header/Header'
import HeaderBanner from './Header/Header-banner'
import LeftSide from './LeftSide/LeftSide'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Showcase from './Showcase/Showcase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  withRoute
} from "react-router-dom";

class App extends React.Component {

  state = {
    featuresItems: {
      title: 'Features Items',
      products: [
        {
          name: "Modern Fit Polo Shirt Black Black",
          price: 50,
          img: "product1.jpg"
        },
        {
          name: "Authentic Hugo Boss Paddy Pro Edition",
          price: 55,
          img: "product2.jpg"

        },
        {
          name: "Easy Polo Black Edition",
          price: 70,
          img: "product3.jpg"
        },
        {
          name: "Short Sleeve Polo Shirt",
          price: 59,
          img: "product4.jpg"
        },
        {
          name: "Women's Puff Sleeve Tee Shirt Dress",
          price: 63,
          img: "product5.jpg"
        }
      ]
    }
  }


  render() {
    return (
      <>
        <Router>
          <Header />
          <section>
            <div className="container">
              <div className="row">
                <HeaderBanner />
                <Main 
                produtctsList={this.state.featuresItems}
                ></Main>
              </div>
            </div>
          </section>
        </Router>
      </>
    )
  }

}

export default App;
