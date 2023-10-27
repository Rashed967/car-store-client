import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

const TeamCard = ({member}) => {
    const {name, img, position} = member
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl ">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="mt-3">
                <h2 className="font-bold text-xl">{name}</h2>
                <p className='font-medium'>{position}</p>
                <div className="flex justify-center gap-1 text-2xl mt-3">
                    <FaFacebook />
                    <FaSquareXTwitter />
                    <FaLinkedin />
                    <FaSquareInstagram />
                </div>
            </div>
        </div>
    );
};

export default TeamCard;