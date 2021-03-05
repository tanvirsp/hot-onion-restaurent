import React from 'react';
import './SingleProduct.css'
import lunch1 from '../../images/lunch1.png'

const SingleProduct = (props) => {
    // console.log(props);
    const {name, excerpt, price, image } = props.food;
    return (
        
            <div className="col-md-4">
                <div className="singleProduc">
                    <img src={image} alt=""/>
                    <h4>{name}</h4>
                    <p>{excerpt}</p>
                    <h3>${price}</h3>
                </div>
            
            </div>
            
            
            
        
    );
};

export default SingleProduct;