
import React from 'react';
import { NavLink } from "react-router-dom";
import NotFound from '../NotFound/NotFound';

const CardDetailsContent = (props) => {
  return (
    <>
      <div className="product-details">
        <div className="col-sm-5">
          <div className={"view-product" + (props.product.sale ? " sale" : "")}>
            <img
              src={
                props.product?.img ?
                  `/assets/images/shop/${props.productFolder}/${props.product.img}` :
                  `/assets/images/404/404.png`
              } alt="" />
          </div>
        </div>
        <div className="col-sm-7">
          <div className="product-information">
            <img src="images/product-details/new.jpg" className="newarrival" alt="" />
            <h2>{props.product.name}</h2>
            <p>Web ID: {props.product.id}</p>
            <span>
              <span>US ${props.product.price}</span>
            </span>
            <p><b>Availability:</b>{props.product.availability ? ' yes' : ' no'}</p>
            {props.product.condition ? <p><b>Condition:</b> {props.product.condition} </p> : null}
            <p><b>Brand:</b> {props.product.brand} </p>
            {props.product.sale ? <p><b>Sale: </b> {props.product.sale}%</p>: null}            
          </div>
        </div>
      </div>
      <div className="category-tab shop-details-tab">
        <div className="tab-content">
          <div className="tab-pane fade active in" id="reviews">
            <div className="col-sm-12">
              <h4>DETAILS</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo
                consequat.Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
                </p>
            </div>
          </div>
        </div>
      </div>
      <div className="recommended_items">
        <h2 className="title text-center">recommended items</h2>
        <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item active">
              {props.arrRandomProductsActive.map((product, index) => {
                return (<div className="col-sm-4" key={index}>
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <div className={"boxImage" + (product.sale ? " sale" : "")}>
                          <img src={
                            product?.img ?
                              `/assets/images/shop/${product.productFolder}/${product.img}` :
                              `/assets/images/404/404.png`
                          } alt="" />
                        </div>
                        <h2>${product.price}</h2>
                        <p>{product.name}</p>
                        <NavLink to={`/${product.category}/${product.id}`} className="btn btn-default add-to-cart">
                          Show Card</NavLink>
                      </div>
                    </div>
                  </div>
                </div>)
              })}
            </div>
            <div className="item">
              {props.arrRandomProducts.map((product, index) => {
                return (<div className="col-sm-4" key={index}>
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <div className={"boxImage" + (product.sale ? " sale" : "")}>
                          <img src={
                            product?.img ?
                              `/assets/images/shop/${product.productFolder}/${product.img}` :
                              `/assets/images/404/404.png`
                          } alt="" />
                        </div>
                        <h2>${product.price}</h2>
                        <p>{product.name}</p>
                        <NavLink to={`/${product.category}/${product.id}`} className="btn btn-default add-to-cart">
                          Show Card</NavLink>
                      </div>
                    </div>
                  </div>
                </div>)
              })}

            </div>
          </div>
          <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
            <i className="fa fa-angle-left" />
          </a>
          <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
            <i className="fa fa-angle-right" />
          </a>
        </div>
      </div>
    </>
  )
};
class CardDetails extends React.Component {
  render() {
    const produtctsList = this.props.produtctsList;
    const id = this.props.match.params.id;
    const category = this.props.match.params.category;
    const productFolder = produtctsList[category]?.imgFolder;
    const categoryList = produtctsList[category]?.productsItems ? produtctsList[category].productsItems : null;
    let product = null;
    const arrRandomProducts = [];
    const arrRandomProductsActive = [];

    const randomProducts = (produtcts) => {
      let lengthCategory = Object.getOwnPropertyNames(produtcts).length;
      const arrCategories = Object.keys(produtcts);
      const randomNum = (max) => { return Math.floor(Math.random() * max); }
      let randomIndCategory = randomNum(lengthCategory);
      const categoryName = arrCategories[randomIndCategory];
      const categoryItem = produtcts[categoryName];
      let randomIndProduct = randomNum(categoryItem.productsItems.length);
      const randomProduct = categoryItem.productsItems[randomIndProduct];
      randomProduct.productFolder = categoryItem.imgFolder;
      randomProduct.category = categoryName;
      return randomProduct
    };

    for (let i = 0; i < 3; i++) {
      arrRandomProducts.push(randomProducts(produtctsList));
      arrRandomProductsActive.push(randomProducts(produtctsList))
    }

    function findIdProduct(categorylist) {
      if (!categorylist) return false
      for (let i = 0; i < categorylist.length; i++) {
        if (categorylist[i].id === +id) {
          product = categorylist[i];
          break
        } else { product = null }
      }
    }

    findIdProduct(categoryList)

    return (
      <div className="col-sm-12 padding-right">
        {product && categoryList ?
          <CardDetailsContent
            product={product}
            productFolder={productFolder}
            arrRandomProductsActive={arrRandomProductsActive}
            arrRandomProducts={arrRandomProducts} >
          </CardDetailsContent> : <NotFound />}
      </div>
    )
  }
};
export default CardDetails