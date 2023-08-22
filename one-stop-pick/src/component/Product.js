import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Product = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setChange(await response.json());
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return <p>Loading...</p>;
  };
  const filterProduct=(c)=>{
    const updatedList=data.filter((x)=>x.category===c);
    setChange(updatedList);
  }

  const DisplayProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mt-3 mb-5">
          <button type="button" className="btn btn-dark mx-2"onClick={()=>setChange(data)}>
            All
          </button>
          <button type="button" className="btn btn-dark mx-2"onClick={()=>filterProduct("men's clothing")}>
            Men
          </button>
          <button type="button" className="btn btn-dark mx-2"onClick={()=>filterProduct("women's clothing")}>
            Women
          </button>
          <button type="button" className="btn btn-dark mx-2"onClick={()=>filterProduct("jewelery")}>
            jwelery
          </button>
          <button type="button" className="btn btn-dark mx-2"onClick={()=>filterProduct("electronics")}>
            gadgets
          </button>
        </div>
        <div className="row">
          {change.map((product) => (
            <div key={product.id} className="col-md-3 mb-5">
              <div className="card" style={{ width: '18rem' }}>
                <img src={product.image} className="card-img-top" alt={product.title} height="240px" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}.</p>
                  <NavLink to={`/products/${product.id}`} className="btn btn-dark">Buy now</NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center my-2">Shop From Here</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <DisplayProducts />}
        </div>
      </div>
    </div>
  );
};

export default Product;


