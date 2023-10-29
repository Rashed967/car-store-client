import React, { useContext, useEffect, useState } from 'react';
import { FaCircleXmark } from 'react-icons/fa6';
import serviceImg from '../../assets/images/services/5.jpg'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ManageOrderCard = ({booking, bookings, setBookings}) => {
   const {customerName, service, id, img, date, email, due, message, _id, status} = booking
    // const [bookings, setBookings] = useState()
 
   const handleDelete = (id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:5000/checkout/${id}`, {
                method : "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){

                    const remainingBooking = bookings.filter(book => book._id !== id)
                    setBookings(remainingBooking)
             Swal.fire(
            'Sevice Deleted!',
            'you successfully deleted.',
            'success'
          )
           }
            })

        }
      })
   }


       //   handle update 

       const handleUpdate = (id) => {
        
        Swal.fire({
            title: 'do you want to change?',
            text: "You won't be able to revert this changes!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Change it!'
          }).then((result) => {
            if (result.isConfirmed) {
    
                fetch(`http://localhost:5000/checkout/${id}`, {
                    method : "PUT",
                    headers : {'content-type' : 'application/json'},
                    body : JSON.stringify({status : "approved"})
                })
                .then(res => res.json())
                .then(data => {
                    if(data.modifiedCound > 0){
    
                        // const remainingBooking = bookings.filter(book => book._id !== id)
                        // setBookings(remainingBooking)
                 Swal.fire(
                'Status has been chnaged!',
                'success'
              )
               }
                })
    
            }
          })
       }



    

    return (
        <tr>
            <th>
                <label className='space-y-2'>
                    <FaCircleXmark className='text-2xl cursor-pointer' onClick={() => handleDelete(_id)} />
                    <Link to={`/editService/${_id}`}><FaEdit  className='text-2xl cursor-pointer' /></Link>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask w-20">
                            <img src={img ? img : serviceImg} className='rounded-md' alt="Avatar Tailwind CSS Component" />

                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        <div className="text-sm opacity-50">{customerName ? customerName : ""}</div>
                    </div>
                </div>
            </td>
            <td>
                {due}
            </td>
            <td>
                {email}
            </td>
            <td>{date ? date : ''}</td>
            <th>
            <div className="badge badge-success px-3 py-3 text-white">{status ? status.status : "Pending"}</div>
            </th>
            <th>
            <button onClick={() => handleUpdate(_id)} className=' btn btn-xs btn-info'>Aprrove</button>
            </th>
        </tr>
    );
};

export default ManageOrderCard;