import React, { useContext, useEffect, useState } from 'react';
import PageBanner from '../Shared/PageBanner/PageBanner';
import bannerImg from '../../assets/images/services/4.jpg'
import ManageOrderCard from './ManageOrderCard';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageOrders = () => {
  const navigate = useNavigate()

    const {user, loading} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    
    // if(loading){
    //     <p>Loading</p>
    // }

    const url = `http://localhost:5000/checkout?email=${user?.email}`

    useEffect(() => {
        fetch(url, {
          headers : {
            authorization : `Bearer ${localStorage.getItem('car-store-token')}`
          }
        })
        .then(res => res.json())
        .then(data => {
          if(! data.error){
           return setBookings(data)
          }

          else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
            navigate("/")
          }
      
        })
        .catch(error => {
            console.error(error)
        })

    },[url])



    return (
        <div>
            <PageBanner img={bannerImg} title="Manage orders" />
            
            {/* manae order card  */}
            <div className="overflow-x-auto">
  <table className="table mt-16">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        
        <th>Name & image</th>
        <th>price</th>
        <th>Email</th>
        <th>Date</th>
        <th>status</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
         bookings.map(booking => <ManageOrderCard
            key={booking._id}
            booking={booking}
            bookings={bookings}
            setBookings={setBookings}
            />)
           
      }
   
    </tbody>

    
  </table>
</div>


        </div>
    );
};

export default ManageOrders;