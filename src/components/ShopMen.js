import React, { useState } from "react";
import "./ShopMen.css";
import products from "../data/Productsdata";
import Swal from "sweetalert2";


function ShopMen() {
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    color: "",
    minPrice: "",
    maxPrice: "",
  });
  const [ShopmenProducts, setShopmenProducts] = useState(
    products.filter((product) => product.categories.includes("Men"))
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
    let sortedProducts = [...ShopmenProducts];
    if (option === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setShopmenProducts(sortedProducts);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    let filteredProducts = products.filter((product) =>
      product.categories.includes("Men")
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

    setShopmenProducts(filteredProducts);
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
    setShopmenProducts(
      products.filter((product) => product.categories.includes("Men"))
    );
    setShowFilter(false);
  };

  return (
    <div className="shopmen">
      <div className="shopmen-heading">MEN'S</div>
      <div className="shopmen-filter-sort">
        <button
          className="shopmen-filter-left"
          onClick={() => setShowFilter(true)}
        >
          FILTER
          <i className="fa-solid fa-filter"></i>
        </button>

        <div className="shopmen-sortby-right">
          SORT BY
          <i className="fa-solid fa-sort-down"></i>
          <div className="shopmen-sort-options">
            <p onClick={() => handleSort("lowToHigh")}>Price: Low to High</p>
            <p onClick={() => handleSort("highToLow")}>Price: High to Low</p>
          </div>
        </div>
      </div>

      <p className="shopmen-total-products">
        {ShopmenProducts.length} PRODUCTS
      </p>

      <div className="shopmen-products">
        {ShopmenProducts.map((product) => (
          <div className="shopmen-product" key={product.id}>
            <img src={product.img} alt={product.name} />
            <div className="shopmen-product-details">
              <p className="shopmen-product-name">{product.name}</p>
              <div className="shopmen-product-details-price-size-cart">
                <div className="shopmen-product-details-price-size">
                  <p className="shopmen-product-price">${product.price}</p>
                  <p className="shopmen-product-sizes">
                    <strong>Size :</strong> {product.sizes.join(", ")}
                  </p>
                </div>
                <div className="product-details-cart">
                  {/* <button className="shopmen-add-to-cart">Add to Bag</button> */}
                  <button
                    className="shopmen-add-to-cart"
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

export default ShopMen;