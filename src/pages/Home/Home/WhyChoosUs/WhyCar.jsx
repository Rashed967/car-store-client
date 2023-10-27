import React from 'react';

const WhyCar = ({img, title}) => {
    console.log(img)
    return (
        <div className='flex flex-col  justify-center items-center gap-1 border-2 h-28 w-48 rounded-md mt-12  mb-6 hover:bg-[#FF3811] hover:text-white'>
            <img src={img} alt="" className='w-14 ' />
            <h3 className=''>{title}</h3>
            
        </div>
    );
};

export default WhyCar;