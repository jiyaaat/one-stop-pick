import React from 'react';
import Product from './Product';

export default function Home() {
  return (
    <div>
        <div className="card text-bg-dark border-0 text-center">
        <img src="assests\shopping-bags.jpg" className="card-img" alt="background" height="550px" style={{ opacity: 0.8 }}  />
        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center text-dark">
            <h5 className="card-title fs-1">New Season New Offer!!</h5>
            <p className="card-text mt-5 fs-3">Want to buy something good for ur loved ones?? </p>
            <p className="card-text  fs-3"> dont worry we got  you... we are here providing our </p> 
            <p className="card-text  fs-3">customers with best quality prodcts at insanely lower prices</p>
            <p className="card-text"><small>Last updated 3 mins ago</small></p>
        </div>
        </div>
        <Product/>
    </div>
  );
}
