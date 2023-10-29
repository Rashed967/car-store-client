import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {title, img, price, _id} = service
    console.log(img)
    return (
        <div className="card text-left border rounded-lg max-w-xs  p-1  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body p-0">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                <div className="card-actions ">
                    <Link to={`/checkout/${_id}`}><button className="btn btn-success btn-sm ">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;