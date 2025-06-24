import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../redux/productSlice";
import Header from "../components/Header";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  if (status === "loading") return <h2>Loading product details...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (!product) return <h2>Product not found.</h2>;

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row align-items-start">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p className="fw-bold text-success">Price: ₹{product.price}</p>
            <p>Rating: {product.rating?.rate} ⭐</p>
            <p>Description: {product.description}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
