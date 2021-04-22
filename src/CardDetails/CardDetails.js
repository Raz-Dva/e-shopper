
import React from 'react';

class CardDetails extends React.Component {
  render() {
    const produtctsList = this.props.produtctsList;
    const id = this.props.match.params.id;
    const category = this.props.match.params.category;

    // produtctsList[category].productsItems.forEach((product, ind)=>{
    //   if(product.id == id) console.log(id)

    // })

    // for(let i=0; i<)
    
    // console.log()

    
    return (
      <div className="col-sm-12 padding-right">
        <div className="product-details">
          {/*product-details*/}
          <div className="col-sm-5">
            <div className="view-product">
              <img src="images/product-details/1.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-7">
            <div className="product-information">
              {/*/product-information*/}
              <img src="images/product-details/new.jpg" className="newarrival" alt="" />
              <h2>Anne Klein Sleeveless Colorblock Scuba</h2>
              <p>Web ID: 1089772</p>
              <img src="images/product-details/rating.png" alt="" />
              <span>
                <span>US $59</span>
              </span>
              <p><b>Availability:</b> In Stock</p>
              <p><b>Condition:</b> New</p>
              <p><b>Brand:</b> E-SHOPPER</p>
            </div>
            {/*/product-information*/}
          </div>
        </div>
        {/*/product-details*/}
        <div className="category-tab shop-details-tab">
          {/*category-tab*/}
          <div className="tab-content">
            <div className="tab-pane fade" id="details">
              <div className="col-sm-3">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/gallery1.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/gallery2.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/gallery3.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/gallery4.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="companyprofile">
              <div className="col-sm-3">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/gallery1.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/gallery3.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/gallery2.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/gallery4.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tag">
              <div className="col-sm-3">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/gallery1.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/gallery2.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/gallery3.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/gallery4.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        {/*/category-tab*/}
        <div className="recommended_items">
          {/*recommended_items*/}
          <h2 className="title text-center">recommended items</h2>

        </div>
        {/*/recommended_items*/}
      </div>
    )
  }
};
export default CardDetails