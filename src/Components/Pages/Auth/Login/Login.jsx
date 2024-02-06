import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContextProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const {userLogin} = useContext(AuthContext)
    const handelLogin =(e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email')
        const password = formData.get('password')
        console.log(email,password);
        userLogin(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            form.reset();
            // ...
          })
          .catch((error) => {
            
            const errorMessage = error.message;
            console.log(errorMessage);
          });

    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='text-center'>Not Have an account <Link to={'/register'}><small className='text-blue-600 font-bold '>Register</small></Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;