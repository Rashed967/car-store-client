import React from 'react';

const ServiceCard = ({service}) => {
    const {title, img, price} = service
    return (
        <div className="card text-left border rounded-lg max-w-xs  p-1  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body p-0">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                <div className="card-actions ">
                    <button className="btn btn-success btn-sm ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;