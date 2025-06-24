import Header from "../components/Header";
import homeImg from "../assets/homeImg.svg";
import {
  fetchProducts,
  setCategory,
  setPriceRange,
  setMinRating,
} from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { setSortOrder } from "../redux/productSlice";

function ProductListing() {
  const categories = [
    { label: "All", value: "All" },
    { label: "Men", value: "men's clothing" },
    { label: "Women", value: "women's clothing" },
    { label: "Jewelry", value: "jewelery" },
    { label: "Electronics", value: "electronics" },
  ];
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.filteredProducts);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const priceRange = useSelector((state) => state.products.filters.priceRange);
  return (
    <>
      <Header />
      <main className="container my-4">
        <section className="mb-4">
          <img src={homeImg} alt="homeImg" className="img-fluid w-100" />
        </section>

        <section>
          <div className="row">
            <div className="col-md-3">
              <div className="card p-3 mb-4">
                <h5 className="mb-3">Filters</h5>
                <label className="form-label">Category</label>
                <select
                  className="form-select mb-3"
                  onChange={(e) => {
                    dispatch(setCategory(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                <label className="form-label">Price</label>

                <Slider
                  range
                  min={0}
                  max={1000}
                  value={priceRange}
                  onChange={(newRange) => dispatch(setPriceRange(newRange))}
                />
                <div className="d-flex justify-content-between">
                  <span>{priceRange[0]} INR</span>
                  <span>{priceRange[1]}INR</span>
                </div>

                <label className="form-label my-2">Rating</label>
                <div className="d-flex flex-wrap gap-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <button
                      key={rating}
                      className="btn btn-outline-secondary d-flex align-items-center border border-solid mx-2 my-2"
                      onClick={() => {
                        dispatch(setMinRating(rating));
                        setCurrentPage(1);
                      }}
                      style={{ border: "none", padding: "0" }}
                    >
                      {Array.from({ length: 5 }, (_, i) => (
                        <i
                          key={i}
                          className={`bi ${
                            i < rating
                              ? "bi-star-fill text-warning"
                              : "bi-star text-muted"
                          }`}
                        ></i>
                      ))}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="d-flex justify-content-end mb-3">
                <select
                  className="form-select w-auto"
                  onChange={(e) => {
                    dispatch(setSortOrder(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  <option value="default">Sort By</option>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </select>
              </div>
              <div className="row">
                {status === "loading" ? (
                  <h4 className="text-center">Loading products...</h4>
                ) : error ? (
                  <h4 className="text-danger text-center">Error: {error}</h4>
                ) : currentProducts.length === 0 ? (
                  <h4 className="text-center">No products found.</h4>
                ) : (
                  currentProducts.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                      <div className="card h-100">
                        <Link to={`/product/${product.id}`}>
                          <img
                            src={product.image}
                            className="card-img-top p-3"
                            alt="product"
                            style={{ height: "220px", objectFit: "contain" }}
                          />
                        </Link>
                        <div className="card-body">
                          <h6 className="card-title">{product.title}</h6>
                          <p className="mb-1">{product.description}</p>
                          <p className="mb-1">
                            <strong>₹{product.price}</strong>
                          </p>
                          <p className="mb-1">
                            ⭐ {product.rating?.rate} ({product.rating?.count})
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-4">
                  <nav>
                    <ul className="pagination">
                      {Array.from({ length: totalPages }, (_, index) => (
                        <li
                          key={index + 1}
                          className={`page-item ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => setCurrentPage(index + 1)}
                          >
                            {index + 1}
                          </button>
                        </li>
                      ))}
                      {currentPage < totalPages && (
                        <li className="page-item">
                          <button
                            className="page-link"
                            onClick={() => setCurrentPage(currentPage + 1)}
                          >
                            Next
                          </button>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductListing;
