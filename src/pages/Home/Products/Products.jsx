import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div className='mt-12'>
            {/* products section header  */}
            <div className='text-center lg:w-1/2 lg:mx-auto'>  
                <h4 className='text-base font-bold text-red-700 mt-1 mb-3'>Popular Products</h4>
                <h2 className='text-3xl font-bold'>Browse Our Products</h2>
                <p className='text-base '>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            {/* products card section  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        />)
                }
            </div>

                {/* btton div  */}
            <div className='py-8'>
                <button className='btn btn-success btn-sm text-white'>more products</button>
            </div>
            
        </div>
    );
};

export default Products;