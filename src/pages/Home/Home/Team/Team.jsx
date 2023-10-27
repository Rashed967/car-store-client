import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    const [team, setTeam] = useState([])

    // load team dta 
    useEffect(() => {
        fetch('team.json')
        .then(res => res.json())
        .then(data => {
            setTeam(data)
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    },[])
    return (
        <div>

            {/* team section header  */}
            <div className='text-center lg:w-1/2 lg:mx-auto'>  
                <h4 className='text-base font-bold text-red-700 mt-1 mb-3'>Team</h4>
                <h2 className='text-3xl font-bold'>Meet Our Team</h2>
                <p className='text-base '>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            {/* team data sow  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    team.map(member => <TeamCard
                        key={member._id}
                        member={member}
                        />)
                }
            </div>
            
        </div>
    );
};

export default Team;