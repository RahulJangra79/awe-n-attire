import React from 'react'
import "./BestSellers.css"
import bestseller1 from "../images/bestseller-11.jpg";
import bestseller2 from "../images/bestseller-22.jpg";
import bestseller3 from "../images/bestseller-33.jpg";


function BestSellers() {
  return (
    <div className='bestsellers-main'>
        <div className='bestsellers-main-text'>
            OUR BEST SELLERS
            <p>Don't miss out</p>
        </div>
        <div className='bestsellers-top-products'>
          <div className='bestsellers-top-product'>
            <img src={bestseller1} alt='image-1'></img>
            <p className='bestsellers-top-product-name'>I'm a Product</p>
            <p className='bestsellers-top-product-price'>$10.99</p>
          </div>

          <div className='bestsellers-top-product'>
            <img src={bestseller2} alt='image-2'></img>
            <p className='bestsellers-top-product-name'>I'm a Product</p>
            <p className='bestsellers-top-product-price'>$10.99</p>
          </div>

          <div className='bestsellers-top-product'>
            <img src={bestseller3} alt='image-3'></img>              
            <p className='bestsellers-top-product-name'>I'm a Product</p>
            <p className='bestsellers-top-product-price'>$10.99</p>
          </div>
        </div>

        <button className='bestsellers-top-products-shop-now-button'>Shop BestSellers</button>

    </div>
  )
}

export default BestSellers