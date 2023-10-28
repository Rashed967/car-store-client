import React from 'react';
import PageBanner from '../Shared/PageBanner/PageBanner';
import img from '../../assets/images/banner/4.jpg'
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const loadedService = useLoaderData()
    console.log(loadedService)
    

    // get form data 
    const getFormData = (event) => {
        event.preventDefault()
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        const newForm = {firstName, lastName, phone, email, message}
        console.log(newForm)
    }
    return (
        <div >
            <PageBanner img={img} title="Checkout" />

            {/* checkout for  */}

            <div className='mt-20 bg-[#F3F3F3] py-10'>
                <form onSubmit={getFormData}>
                    <div className='space-y-7'>
                    <div className='md:flex md:justify-center gap-4 '>
                        <input name='firstName' type="text" placeholder="First name" className="input input-bordered w-full max-w-sm" />

                        <input name='lastName' type="text" placeholder="Last name" className="input input-bordered w-full max-w-sm" />
                    </div>

                    <div className='md:flex md:justify-center gap-4 '>
                        <input name='phone' type="number" placeholder="Your phone" className="input input-bordered w-full max-w-sm" />

                        <input name='email' type="email" placeholder="Your email" className="input input-bordered w-full max-w-sm" />
                    </div>
                    
                    <div className='md:flex md:justify-center gap-4 '>
                        <textarea name="message" className="textarea h-40 resize-none textarea-accent w-full max-w-3xl" placeholder="Bio"></textarea>
                    </div>
                    <div className='max-w-3xl mx-auto'>
                    <button type='submit' className="btn btn-success w-full text-white">Success</button>

                    </div>

                    </div>
                </form>
            </div>



        </div>

    );
};

export default Checkout;