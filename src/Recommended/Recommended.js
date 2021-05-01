
import React from 'react';
import { NavLink } from "react-router-dom";

class Recommended extends React.Component {
    render(){
        const produtctsList = this.props.produtctsList;
        const arrRecomended = [];
        for (let category in produtctsList) {
            produtctsList[category].productsItems.forEach((product) => {
                if ('condition' in product){
                    product.imgFolder = produtctsList[category].imgFolder;
                    product.category = category;
                    arrRecomended.push(product);         
                }
            })
        }
        return(
            <>
            <h2 className="title text-center">Recommended Items</h2>
            { arrRecomended.map((product, index) => {
                return (
                    < div className="col-sm-4" key={index}>
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <div className={"wrap-img_card" + (product.sale ? " sale" : "")}>
                                        <img src={
                                            product?.img ?
                                                `assets/images/shop/${product.imgFolder}/${product.img}` :
                                                `assets/images/404/404.png`
                                        }
                                            alt="" />
                                    </div>
                                    <h2>${product.price}</h2>
                                    <p>{product.name}</p>
                                    <NavLink to={`/${product.category}/${product.id}`} className="btn btn-default add-to-cart">
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
};
export default Recommended