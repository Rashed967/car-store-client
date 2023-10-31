import React, { useContext } from 'react';
import formImg from '../../assets/images/login/login.svg'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
   

  
    const {signIn} = useContext(AuthContext)

    // handle sign in 
    const handlSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        // signin user 
        signIn(email, password)
        .then(result => {
            const user = result.user;
            if(user.uid){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sign in successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  const loggedUser = {
                    email : user.email
                  }

                  fetch('http://localhost:5000/jwt', {
                    method : "POST",
                    headers : {'content-type' : 'application/json'},
                    body : JSON.stringify(loggedUser)
                  })
                  .then(res => res.json())
                  .then(data => {
                    console.log(data)
                    // set token to localStorage 
                    localStorage.setItem('car-store-access-token', data.token)
                  })
                }
                navigate(from, {replace : true})
        })
        .catch(error =>{
            console.log(error)
        })
  
        
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 pr-16">
                        <img className='' src={formImg} alt="" />
                    </div>

                    {/* login form  */}
                    <div className="card flex-shrink-0 w-1/2 py-16 px-10 border  bg-base-100">
                        <h2 className='text-center text-3xl font-bold'>Login</h2>
                        <form onSubmit={handlSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-error" type="submit" value="Sign in" />
                            </div>
                        </form>
                        <p className='font-semibold my-3 text-left'>New to Car store?
                            <Link to="/signup"><span className='text-blue-700 ml-1'>sign up</span></Link>

                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;