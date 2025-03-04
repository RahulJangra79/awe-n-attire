import React, { useState } from "react";
import "./ShopWomen.css";
import products from "../data/Productsdata";
import Swal from "sweetalert2";

function ShopWomen() {
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    color: "",
    minPrice: "",
    maxPrice: "",
  });
  const [shopwomenProducts, setshopwomenProducts] = useState(
    products.filter((product) => product.categories.includes("Women"))
  );

  const handleAddToBag = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        ...product,
        price: Number(product.price), // Ensure price is a number
        quantity: 1,
        image: product.img,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // Save to local storage
    // alert(`${product.name} added to cart!`);
    Swal.fire({
          icon: "success",
          title: "Product Added To Cart",
        });
  };

  const handleSort = (option) => {
    let sortedProducts = [...shopwomenProducts];
    if (option === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setshopwomenProducts(sortedProducts);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    let filteredProducts = products.filter((product) =>
      product.categories.includes("Women")
    );

    if (filters.category) {
      filteredProducts = filteredProducts.filter((product) =>
        product.categories.includes(filters.category)
      );
    }
    if (filters.size) {
      filteredProducts = filteredProducts.filter((product) =>
        product.sizes.includes(filters.size)
      );
    }
    if (filters.color) {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filters.color
      );
    }
    if (filters.minPrice) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= parseFloat(filters.minPrice)
      );
    }
    if (filters.maxPrice) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= parseFloat(filters.maxPrice)
      );
    }

    setshopwomenProducts(filteredProducts);
    setShowFilter(false);
  };

  const resetFilters = () => {
    setFilters({
      category: "",
      size: "",
      color: "",
      minPrice: "",
      maxPrice: "",
    });
    setshopwomenProducts(
      products.filter((product) => product.categories.includes("Women"))
    );
    setShowFilter(false);
  };

  return (
    <div className="shopwomen">
      <div className="shopwomen-heading">WOMEN'S</div>
      <div className="shopwomen-filter-sort">
        <button
          className="shopwomen-filter-left"
          onClick={() => setShowFilter(true)}
        >
          FILTER
          <i className="fa-solid fa-filter"></i>
        </button>

        <div className="shopwomen-sortby-right">
          SORT BY
          <i className="fa-solid fa-sort-down"></i>
          <div className="shopwomen-sort-options">
            <p onClick={() => handleSort("lowToHigh")}>Price: Low to High</p>
            <p onClick={() => handleSort("highToLow")}>Price: High to Low</p>
          </div>
        </div>
      </div>

      <p className="shopwomen-total-products">
        {shopwomenProducts.length} PRODUCTS
      </p>

      <div className="shopwomen-products">
        {shopwomenProducts.map((product) => (
          <div className="shopwomen-product" key={product.id}>
            <img src={product.img} alt={product.name} />
            <div className="shopwomen-product-details">
              <p className="shopwomen-product-name">{product.name}</p>
              <div className="shopwomen-product-details-price-size-cart">
                <div className="shopwomen-product-details-price-size">
                  <p className="shopwomen-product-price">${product.price}</p>
                  <p className="shopwomen-product-sizes">
                    <strong>Size :</strong> {product.sizes.join(", ")}
                  </p>
                </div>
                <div className="product-details-cart">
                  {/* <button className="shopwomen-add-to-cart">Add to Bag</button> */}
                  <button
                    className="shopwomen-add-to-cart"
                    onClick={() => handleAddToBag(product)}
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showFilter && (
        <div className="filter-overlay">
          <div className="filter-container">
            <button
              className="close-filter"
              onClick={() => setShowFilter(false)}
            >
              ×
            </button>
            <h2>Product Filters</h2>
            <div className="filter-options">
              <label>
                Category:
                <select
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                >
                  <option value="">All</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Footwear">Footwear</option>
                </select>
              </label>
              <label>
                Size:
                <select
                  name="size"
                  value={filters.size}
                  onChange={handleFilterChange}
                >
                  <option value="">All</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </label>

              <label>
                Min Price:
                <input
                  type="number"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                />
              </label>

              <label>
                Max Price:
                <input
                  type="number"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                />
              </label>
            </div>
            <button className="apply-filters" onClick={applyFilters}>
              SHOW PRODUCTS
            </button>
            <button className="reset-filters" onClick={resetFilters}>
              RESET FILTERS
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopWomen;