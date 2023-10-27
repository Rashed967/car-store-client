import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';

const ProductCard = ({ product }) => {
    const { name, img, price, rating } = product
    return (
        <div className="py-3 px-2 flex flex-col justify-center items-center  bg-base-100 border-2 rounded-md text-center gap-6">
            <div className='bg-[#F3F3F3] w-2/3 flex justify-center py-4'>
                <figure className="">
                    <img src={img} alt="Shoes" className="rounded-xl w-40 " />
                </figure>
            </div>
            <div className="flex  flex-col items-center gap-y-1 mt-2 text-center">
                <h2 className="card-title">{name}</h2>
                <p>
                    <Rating
                        readonly
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={
                        <FaStar className='icon text-yellow-600' />}
                        fullSymbol={<FaStar  className='icon text-yellow-600' />}
                    />
                </p>
                <p><span className='font-bold'>Price : </span> ${price}</p>
                
            </div>
        </div>
    );
};

export default ProductCard;