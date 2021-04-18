import React from 'react';

class SportNike extends React.Component {
    state = {
        products: [
            {
                name: "NSW Club Jogger Jersey",
                price: 150,
                img: "nike-product1.jpg"
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
    }
    render(){
        return(
            <>
                <h2 className="title text-center">Sportswear Nike</h2>
                { this.state.products.map((product, index) => {
                    return (
                        < div className="col-sm-4" key={index}>
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <div style={{ 'height': '200px', 'overflow': 'hidden' }}>
                                            <img src={`assets/images/nike/${product.img}`} alt="" />
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
};
export default SportNike