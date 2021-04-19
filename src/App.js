// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header/Header'
import HeaderBanner from './Header/Header-banner'
import Main from './Main/Main'
import {
  BrowserRouter as Router
  
} from "react-router-dom";

class App extends React.Component {

  state = {
    storeProducts: {
      featuresItems: {
        imgFolder:'home',
        title: 'Features Items',
        productsItems: [
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
      },
      sportSwearNike: {
        title: 'Sport Swear Nike',
        imgFolder:'nike',
        productsItems: [
          {
            name: "NSW Club Jogger Jersey",
            price: 150
          },
          {
            name: "Club Men's Training Joggers",
            price: 155,
            img: "nike-product2.jpg"

          },
          {
            name: "Shorts Drawstring Zipper Pockets",
            price: 110,
            img: "nike-product3.jpg"

          }
        ]
      },
      sportSwearAdidas: {
        title: 'Sport Swear Nike',
        imgFolder:'nike',
        productsItems: [
          {
            name: "NSW Club Jogger Jersey",
            price: 90
          },
          {
            name: "Club Men's Training Joggers",
            price: 68,
            img: "nike-product2.jpg"

          },
          {
            name: "Shorts Drawstring Zipper Pockets",
            price: 130

          },
          {
            name: "Shorts Drawstring Zipper Pockets",
            price: 130,
            img: "nike-product3.jpg"

          }
        ]
      }

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
                  produtctsList={this.state.storeProducts}
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
