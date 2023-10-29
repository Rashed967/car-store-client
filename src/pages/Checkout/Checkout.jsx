import React, { useContext } from 'react';
import PageBanner from '../Shared/PageBanner/PageBanner';
import bannerImg from '../../assets/images/banner/4.jpg'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'

const Checkout = () => {

    const {user, loading} = useContext(AuthContext)
    // console.log(user)

    const loadedService = useLoaderData()
    const { title, price, service_id, img} = loadedService
    console.log(title, img)


    // get form data 
    const getFormData = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const due = form.due.value;
        const message = form.message.value;
        const customerDetail = { customerName: name, service : title, id : service_id, img, date, email, due, message }

        // send data to the server 
        fetch(`http://localhost:5000/checkout`, {
            method : "POST",
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify(customerDetail)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Service booked',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div >
            <PageBanner img={bannerImg} title="Checkout" />

            <div className='mt-16 text-3xl font-bold'>
                <h2>Book service of <span className='text-blue-600'>({title})</span></h2>
            </div>

            {/* checkout for  */}

            <div className='mt-6 bg-[#F3F3F3] py-10'>
                <form onSubmit={getFormData}>
                    <div className='space-y-7'>
                        <div className='md:flex md:justify-center gap-4 '>
                            <div className='w-full max-w-sm'>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' defaultValue={user ? user.displayName : "Your name"} type="text"  className="input input-bordered w-full max-w-sm" />
                            </div>

                            <div className='w-full max-w-sm'>
                                <label className="label">
                                    <span className="label-text">Select a date</span>
                                </label>

                                <input name='date' type="date" className="input input-bordered w-full max-w-sm" />
                            </div>
                            <div>
                            </div>

                        </div>

                    
                         
                       <div className='md:flex md:justify-center gap-4 '>
                        <div className='w-full max-w-sm'>
                           <label className="label">
                                    <span className="label-text">Email</span>
                                </label> 
                            <input name='email' readOnly defaultValue={user?.email} type="email"  className="input input-bordered w-full max-w-sm" />
                        </div>

                        <div className='w-full max-w-sm'>
                             <label className="label">
                                    <span className="label-text">Due</span>
                                </label>
                            <input name='due' type="number" defaultValue={price} className="input input-bordered w-full max-w-sm" />
                        </div>
                        </div>

                        {/* textarea  */}

                        <div className='md:flex md:justify-center gap-4 '>
                            <textarea name="message" className="textarea h-40 resize-none textarea-accent w-full max-w-3xl" placeholder="Write something..."></textarea>
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