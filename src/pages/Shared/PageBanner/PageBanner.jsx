import React from 'react';


const PageBanner = ({img, title}) => {
    const divStyle = {
        backgroundImage : `url(${img})`,
        backgroundPosition : "center",
        backgroundSize : "cover"
    }
    return (
        <div className='h-52 rounded-md' style={divStyle}>
            <div className='bg-black/60 h-full flex items-center pl-10'>

            <h3 className='text-white font-bold text-3xl'> {title}</h3>
            </div>
        </div>
    );
};

export default PageBanner;