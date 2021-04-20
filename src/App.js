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
        imgFolder:'features',
        title: 'Features Items',
        productsItems: [
          {
            name: "Modern Fit Polo Shirt Black Black",
            price: 50,
            img: "features-product1.jpg"
          },
          {
            name: "Authentic Hugo Boss Paddy Pro Edition",
            price: 55,
            img: "features-product2.jpg"

          },
          {
            name: "Easy Polo Black Edition",
            price: 70,
            img: "features-product3.jpg"
          },
          {
            name: "Short Sleeve Polo Shirt",
            price: 59,
            img: "features-product4.jpg"
          },
          {
            name: "Women's Puff Sleeve Tee Shirt Dress",
            price: 63,
            img: "features-product5.jpg"
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
        title: 'Sport Swear Adidas',
        imgFolder:'adidas',
        productsItems: [
          {
            name: "Sportswear 3-Stripes Tape Pants",
            price: 190,
            img: "adidas-product3.jpg"
          },
          {
            name: "Sportswear Innovation Motion Full-Zip",
            price:88,
            img: "adidas-product2.jpg"

          },
          {
            name: "Shorts Drawstring Zipper Pockets",
            price: 94

          },
          {
            name: "Sportswear Cotton Track Suit",
            price: 130,
            img: "adidas-product1.jpg"

          }
        ]
      },
      sportSwearPuma: {
        title: 'Sport Swear Adidas',
        imgFolder:'puma',
        productsItems: [
          {
            name: "Sportswear 3-Stripes Tape Pants",
            price: 190,
            img: "puma-product3.jpg"
          },
          {
            name: "Sportswear Innovation Motion Full-Zip",
            price:88,
            img: "puma-product2.jpg"

          },
          {
            name: "Shorts Drawstring Zipper Pockets",
            price: 94

          },
          {
            name: "Sportswear Cotton Track Suit",
            price: 130,
            img: "puma-product1.jpg"

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
