import React from 'react';
import "./BestSellers.css";
import bestsellerData from "../data//Productsdata";

function BestSellers() {

  const bestsellers = bestsellerData.filter(product => product.categories.includes("Bestseller"));


  return (
    <div className='bestsellers-main'>
        <div className='bestsellers-main-text'>
            OUR BEST SELLERS
            <p>Don't miss out</p>
        </div>
        <div className='bestsellers-top-products'>
          
          {bestsellers.map((product)=>{
            return(
            <div className='bestsellers-top-product'>
              <img src={product.img} alt={product.name}></img>
              <p className='bestsellers-top-product-name'>{product.name}</p>
              <p className='bestsellers-top-product-price'>{product.price}</p>
            </div>
            )
          })}

        </div>

        {/* <button className='bestsellers-top-products-shop-now-button'>Shop BestSellers</button> */}

    </div>
  )
}

export default BestSellers