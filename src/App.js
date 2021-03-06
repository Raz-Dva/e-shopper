// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header/Header'
import HeaderBanner from './Header/Header-banner'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import {
  BrowserRouter
} from "react-router-dom";

class App extends React.Component {

  state = {
    storeProducts: {
      featuresItems: {
        imgFolder: 'features',
        title: 'Features Items',
        productsItems: [
          {
            id: 1,
            name: "Modern Fit Polo Shirt Black Black",
            condition: 'Premium',
            availability: false,
            brand: 'Adidas',
            price: 50,
            img: "features-product1.jpg"
          },
          {
            id: 2,
            name: "Authentic Hugo Boss Paddy Pro Edition",
            condition: 'New',
            availability: true,
            brand: 'Puma',
            price: 55,
            sale: 50,
            img: "features-product2.jpg"
          },
          {
            id: 3,
            name: "Easy Polo Black Edition",
            availability: true,
            brand: 'Boss',
            price: 70,
            img: "features-product3.jpg"
          },
          {
            id: 4,
            name: "Short Sleeve Polo Shirt",
            availability: true,
            brand: 'Boss',
            price: 59,
            sale: 13,
            img: "features-product4.jpg"
          },
          {
            id: 5,
            name: "Women's Puff Sleeve Tee Shirt Dress",
            condition: 'New',
            availability: true,
            brand: 'Nike',
            price: 63,
            img: "features-product5.jpg"
          }
        ]
      },
      sportSwearNike: {
        title: 'Sport Swear Nike',
        imgFolder: 'nike',
        productsItems: [
          {
            id: 1,
            name: "NSW Club Jogger Jersey",
            condition: 'Premium',
            availability: false,
            brand: 'Nike',
            price: 150
          },
          {
            id: 2,
            name: "Club Men's Training Joggers",
            availability: true,
            brand: 'Nike',
            price: 155,
            img: "nike-product2.jpg"

          },
          {
            id: 3,
            name: "Shorts Drawstring Zipper Pockets",
            availability: true,
            brand: 'Nike',
            price: 110,
            sale: 10,
            img: "nike-product3.jpg"

          }
        ]
      },
      sportSwearAdidas: {
        title: 'Sport Swear Adidas',
        imgFolder: 'adidas',
        productsItems: [
          {
            id: 1,
            name: "Sportswear 3-Stripes Tape Pants",
            availability: true,
            brand: 'Adidas',
            price: 190,
            sale: 5,
            img: "adidas-product3.jpg"
          },
          {
            id: 2,
            name: "Sportswear Innovation Motion Full-Zip",
            condition: 'Premium',
            availability: true,
            brand: 'Adidas',
            price: 88,
            img: "adidas-product2.jpg"

          },
          {
            id: 3,
            name: "Shorts Drawstring Zipper Pockets",
            condition: 'New',
            availability: false,
            brand: 'Adidas',
            price: 94

          },
          {
            id: 4,
            name: "Sportswear Cotton Track Suit",
            availability: true,
            brand: 'Adidas',
            price: 130,
            img: "adidas-product1.jpg"

          }
        ]
      },
      sportSwearPuma: {
        title: 'Sport Swear Puma',
        imgFolder: 'puma',
        productsItems: [
          {
            id: 1,
            name: "Sportswear 3-Stripes Tape Pants",
            condition: 'Premium',
            availability: true,
            brand: 'Puma',
            price: 190,
            img: "puma-product3.jpg"
          },
          {
            id: 2,
            name: "Sportswear Innovation Motion Full-Zip",
            availability: true,
            brand: 'Puma',
            price: 88,
            sale: 20,
            img: "puma-product2.jpg"

          },
          {
            id: 4,
            name: "Sportswear Cotton Track Suit",
            condition: 'New',
            availability: false,
            brand: 'Puma',
            price: 130,
            img: "puma-product1.jpg"

          },
          {
            id: 3,
            name: "Shorts Drawstring Zipper Pockets",
            availability: true,
            brand: 'Puma',
            price: 94

          }
        ]
      },
      bossMan: {
        title: 'Boss Man',
        imgFolder: 'boss',
        productsItems: [
          {
            id: 1,
            name: "Polo Hugo Boss",
            condition: 'Premium',
            availability: true,
            brand: 'Boss',
            price: 190,
            img: "boss-product1.jpg"
          },
          {
            id: 2,
            name: "Green Solid Polo",
            availability: true,
            brand: 'Boss',
            price: 88,
            sale: 20,
            img: "boss-product2.jpg"

          }
        ]
      },
      guessMan: {
        title: 'Guess Man',
        imgFolder: 'guess',
        productsItems: [
          {
            id: 1,
            name: "Eco Roy Fleece Shorts",
            condition: 'New',
            availability: true,
            brand: 'Guess',
            price: 110,
            img: "guess-product1.jpg"
          },
          {
            id: 2,
            name: " Tie-Dye Logo Tee",
            availability: true,
            brand: 'Guess',
            price: 188,
            sale: 60,
            img: "guess-product2.jpg"

          }
        ]
      },
      valentinoWomans: {
        title: 'Valentino Womans',
        imgFolder: 'valentino',
        productsItems: [
          {
            id: 1,
            name: " VALENTINO LOVE CELEBRATION MINI DRESS BLACK ",
            availability: true,
            brand: 'Valentino',
            price: 386,
            sale: 3,
            img: "valentino-product1.jpg"

          },
          {
            id: 2,
            name: "Valentino Floral Silk Midi Dress Multi Pattern Women's Clothing Dresses Cocktail",
            availability: true,
            brand: 'valentino',
            price: 532,
            img: "valentino-product2.jpg"

          },
          {
            id: 3,
            name: "Valentino Beige Silk Pleated Sleeveless Maxi Dress M",
            availability: true,
            brand: 'valentino',
            price: 452,
            img: "valentino-product3.jpg"

          },
          {
            id: 4,
            name: "Valentino Tie-Neck Rose-Embroidered Lace Bodice Dress",
            availability: true,
            brand: 'valentino',
            price: 190,
            img: "valentino-product4.jpg"

          }
        ]
      },
      diorWomans: {
        title: 'Dior Womans',
        imgFolder: 'dior',
        productsItems: [
          {
            id: 1,
            name: "Christian Dior Couture Show",
            availability: true,
            brand: 'dior',
            price: 386,
            sale: 3,
            img: "dior-product1.jpg"

          },
          {
            id: 2,
            name: "Special Section Dior Clothing Womens",
            availability: true,
            brand: 'dior',
            price: 532,
            img: "dior-product2.jpg"

          },
          {
            id: 3,
            name: "Pin On My Interior Design Created",
            availability: true,
            brand: 'dior',
            price: 452,
            img: "dior-product3.jpg"

          }
        ]
      },
      kids: {
        title: 'Kids clothes',
        imgFolder: 'kids',
        productsItems: [
          {
            id: 1,
            name: "LZH Autumn Christmas Kids Clothes Suit For Boys ",
            availability: true,
            brand: 'kids',
            price: 86,
            sale: 10,
            img: "kids-product1.jpg"

          },
          {
            id: 2,
            name: "Kids clothing wholesale children outfits boys summer",
            availability: true,
            brand: 'kids',
            price: 52,
            img: "kids-product2.jpg"

          }
        ]
      }
    }
  }


  render() {
    return (
      <>
        <BrowserRouter>
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
          <Footer />

        </BrowserRouter>
      </>
    )
  }

}

export default App;
