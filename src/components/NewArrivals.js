import React from "react";
import "./NewArrivals.css";
import newarrivaldata from "../data/Productsdata";

function NewArrivals() {

  const newarrival = newarrivaldata.filter(product => product.categories.includes("New Arrival"));

  return (
    <div className="new-arrivals">
      <div className="new-arrivals-main">
        <div className="new-arrivals-text">NEW ARRIVALS</div>
        <div className="new-arrivals-products">

        {newarrival.map((product) => {
          return (
            <div className="new-arrivals-product">
              <img src={product.img} alt={product.name}></img>
              <p className="new-arrivals-product-name">{product.name}</p>
              <p className="new-arrivals-product-price">{product.price}</p>
            </div>
          )
        })}

        </div>

        <button className="new-arrivals-products-shop-now-button">
          <a href="/allproducts">View More </a>
        </button>
      </div>
    </div>
  );
}

export default NewArrivals;
