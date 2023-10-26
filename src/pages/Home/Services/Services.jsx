import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])

    console.log(services)
    return (
        <>
        <div className='md:w-1/2  text-center mx-auto mt-6'>
            <h4 className='text-base font-bold text-red-700 '>Services</h4>
            <h4 className='text-4xl font-bold mt-1 mb-4'>Our services area</h4>
            <p className='text-base'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            {
                services.map(service => <ServiceCard 
                key={service._id}
                service={service}

                />)
            }
        </div>


        </>
    );
};

export default Services;