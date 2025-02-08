import React from 'react'
import "./NewArrivals.css"
import bestseller1 from "../images/bestseller-11.jpg";
import bestseller2 from "../images/bestseller-22.jpg";
import bestseller3 from "../images/bestseller-33.jpg";

function NewArrivals() {
  return (
    <div className='new-arrivals'>
        <div className='new-arrivals-main'>
            <div className='new-arrivals-text'>
                New Arrivals
            </div>
            <div className='new-arrivals-products'>
                <div className='new-arrivals-product'>
                    <img src={bestseller1} alt='image-1'></img>
                    <p className='new-arrivals-product-name'>I'm a Product</p>
                    <p className='new-arrivals-product-price'>$10.99</p>
                </div>

                <div className='new-arrivals-product'>
                    <img src={bestseller2} alt='image-2'></img>
                    <p className='new-arrivals-product-name'>I'm a Product</p>
                    <p className='new-arrivals-product-price'>$10.99</p>
                </div>

                <div className='new-arrivals-product'>
                    <img src={bestseller3} alt='image-3'></img>              
                    <p className='new-arrivals-product-name'>I'm a Product</p>
                    <p className='new-arrivals-product-price'>$10.99</p>
                </div>

                <div className='new-arrivals-product'>
                    <img src={bestseller1} alt='image-1'></img>
                    <p className='new-arrivals-product-name'>I'm a Product</p>
                    <p className='new-arrivals-product-price'>$10.99</p>
                </div>

                <div className='new-arrivals-product'>
                    <img src={bestseller2} alt='image-2'></img>
                    <p className='new-arrivals-product-name'>I'm a Product</p>
                    <p className='new-arrivals-product-price'>$10.99</p>
                </div>

                <div className='new-arrivals-product'>
                    <img src={bestseller3} alt='image-3'></img>              
                    <p className='new-arrivals-product-name'>I'm a Product</p>
                    <p className='new-arrivals-product-price'>$10.99</p>
                </div>
            </div>

            

            <button className='new-arrivals-products-shop-now-button'>View More</button>

        </div>
    </div>
  )
}

export default NewArrivals
