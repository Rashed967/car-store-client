import React, { useContext } from 'react';
import formImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Signup = () => {

    const {createUser} = useContext(AuthContext)

    

      // handle sign up
      const handlSignup = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

              // create user with firebase 
        
              createUser(email, password)
              .then(userCredintial => {
                const user = userCredintial.user.uid;
                if(user){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User created successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            }) 
            .catch(error => {
                const code = error.code;
                const message = error.message;
                console.log(code, message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 pr-16">
                        <img className='' src={formImg} alt="" />
                    </div>

                    {/* login form  */}
                    <div className="card flex-shrink-0 w-1/2 py-16 px-10 border  bg-base-100">
                        <h2 className='text-center text-3xl font-bold'>Sign up</h2>
                        <form onSubmit={handlSignup}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                            </div>
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

                                <input className="btn btn-error" type="submit" value="Sign up" />
                            </div>
                        </form>
                        <p className='font-semibold my-3 text-left'>Already have an account?
                            <Link to="/login"><span className='text-blue-700 ml-1'>sign in</span></Link>

                        </p>
                    </div>
                </div>
            </div>
    );
};

export default Signup;