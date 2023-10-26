import React from 'react';
import formImg from '../../assets/images/login/login.svg'

const Login = () => {


    // handle sign in 
    const handlSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
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
        
          <input  className="btn btn-error" type="submit" value="Sign in" />
        </div>
      </form>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;