import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
      <div className='h-full flex justify-center items-center'>
          <span className="loading loading-ring loading-lg"></span>
      </div>

    }
    
    if(user?.email){
        return children
    }
    return <Navigate to="/login" replace />
};

export default PrivetRoute;