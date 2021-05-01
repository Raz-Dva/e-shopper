import React from 'react';
import { NavLink } from "react-router-dom";

class Products extends React.Component {
    render() {
        const produtctsList = this.props.produtctsList;
        let category = this.props.category;
        return (
            <>
                <h2 className="title text-center">{produtctsList.title}</h2>
                { produtctsList.productsItems.map((product, index) => {
                    return (
                        < div className="col-sm-4" key={index}>
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <div className={"wrap-img_card" + (product.sale ? " sale" : "")}>
                                            <img src={
                                                product?.img ?
                                                    `assets/images/shop/${produtctsList.imgFolder}/${product.img}` :
                                                    `assets/images/404/404.png`
                                            }
                                                alt="" />
                                        </div>
                                        <h2>${product.price}</h2>
                                        <p>{product.name}</p>
                                        <NavLink to={`/${category}/${product.id}`} className="btn btn-default add-to-cart">
                                            Show Card</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div >
                    )
                })}
            </>
        )
    }
}
export default Products;

