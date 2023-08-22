import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/action/index';


const Prod = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct=(product)=>{
    dispatch(addItem(product));
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <p>Loading...</p>;
  };

  const DisplayProducts = () => {
    return (
      <>
        <div className="row"style={{ marginTop: '100px' }}>
          <div className="col-md-6">
            <img src={product.image} alt={product.title} height="380px" width="380px" />
          </div>
          <div className="col-md-6">
            <h1>{product.title}</h1>
            <p className="lead">
              Rating: {product.rating && product.rating.rate}
            </p>
            <h3>${product.price}</h3>
            <p className="lead">{product.description}</p>
            <div className="d-flex flex-column flex-md-row">
              <button type="button" className="btn btn-outline-secondary mx-2 mb-2 mb-md-0"onClick={()=>addProduct(product)}>
                Add to Cart
              </button>
              <NavLink to="/cart" type="button" className="btn btn-dark mx-2">
                Go to Cart
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };
  

  return (
    <div>
      <div className="container">
        <div className="row">
          {loading ? <Loading /> : <DisplayProducts />}
        </div>
      </div>
    </div>
  );
};

export default Prod;
