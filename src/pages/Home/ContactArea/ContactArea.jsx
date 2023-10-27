import React from 'react';
import { FaCalendarAlt, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

const ContactArea = () => {
    return (
        <div className='bg-[#151515] text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center py-12 px-5 text-left rounded-md mt-24'>
            {/* calaner  */}
            <div className='flex items-center justify-center gap-3 border-white'>
                {/* img div  */}
                <div>
                <FaCalendarAlt className='text-2xl' />
                </div>
               
                {/* contenet div  */}
                <div>
                    <p className='text-sm'>We are open monday-friday</p>
                    <h4 className='text-xl font-bold'>7:00 am - 9:00 pm</h4>
                </div>
            </div>

                {/* phone div  */}

                <div className='flex items-center justify-center gap-3 border-white'>
                {/* img div  */}
                <div>
                <FaPhoneAlt className='text-2xl' />
                </div>
               
                {/* contenet div  */}
                <div>
                    <p className='text-sm'>Have a question?</p>
                    <h4 className='text-xl font-bold'>+2546 251 2658</h4>
                </div>

            </div>


                {/* location div  */}
                <div className='flex items-center justify-center gap-3 border-white'>
                {/* img div  */}
                <div>
                <FaLocationArrow className='text-2xl' />
                </div>
               
                {/* contenet div  */}
                <div>
                    <p className='text-sm'>Need a repair? our address</p>
                    <h4 className='text-xl font-bold'>Liza Street, New York</h4>
                </div>

            </div>


        </div>
    );
};

export default ContactArea;