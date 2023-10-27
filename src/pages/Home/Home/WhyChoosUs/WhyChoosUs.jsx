import React from 'react';
import WhyCar from './WhyCar';
import groupImg from '../../../../assets/icons/group.svg'
import delivary from '../../../../assets/icons/deliveryt.svg'
import support from '../../../../assets/icons/person.svg'
import setting from '../../../../assets/icons/Wrench.svg'
import check from '../../../../assets/icons/check.svg'



const WhyChoosUs = () => {
    return (
        <div>

               {/* why choose us section header  */}
               <div className='text-center lg:w-1/2 lg:mx-auto'>  
                <h4 className='text-base font-bold text-red-700 mt-1 mb-3'>Core Features</h4>
                <h2 className='text-3xl font-bold'>Why Choose Us</h2>
                <p className='text-base '>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>


            {/* service with logo section  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center items-center'>
                <WhyCar img={groupImg} title="Expert Team"  />
            
                <WhyCar img={delivary} title="Timely Delivery"/>

                <WhyCar img={support} title="24/7 Support" />

                <WhyCar img={setting} title="Best Equipment" />
                <WhyCar img={check} title="100% Guranty" />

            </div>
            
        </div>
    );
};

export default WhyChoosUs;