import React from 'react';

class Products extends React.Component {
    
    render() {
        const produtctsList=this.props.produtctsList;
        return (
            <>
                <h2 className="title text-center">{produtctsList.title}</h2>
                { produtctsList.productsItems.map((product, index) => {
                    return (
                        < div className="col-sm-4" key={index}>
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <div style={{ 'height': '200px', 'overflow': 'hidden' }}>
                                            <img src={
                                                product?.img ?                                             
                                                `assets/images/shop/${produtctsList.imgFolder}/${product.img}`:
                                                `assets/images/404/404.png`
                                            }
                                                 alt="" />
                                        </div>
                                        <h2>${product.price}</h2>
                                        <p>{product.name}</p>
                                        <a href="#" className="btn btn-default add-to-cart">
                                            Show Cart</a>
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