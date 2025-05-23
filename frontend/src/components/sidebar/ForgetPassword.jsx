import { useEffect } from 'react'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessages, ForgetPasswordUser } from '../redux/slice/authSlice';

const ForgetPassword = () => {
  const [email,setEmail] = useState({
    email:""
  });

const dispatch = useDispatch()

  const { success, error, message } = useSelector((state) => state.user);
  
 useEffect(() => {
      if (success) {                
        handleSuccess(message);
        dispatch(clearMessages());
      }
      if (error) {
        handleError(error);
        dispatch(clearMessages());
      }
    }, [success, error, dispatch]);

  const handleSubmit=async(e)=>{
    e.preventDefault();
       dispatch(ForgetPasswordUser(email));

  }

  return (
  <>
      <div class="auth-main">
    <div class="auth-wrapper v3">
      <ToastContainer />
      <div class="auth-form">
        <form onSubmit={handleSubmit}>
        <div class="auth-header">
          <a href="/dashboard"><img src="../src/assets/images/logo-dark.svg" alt="img"/></a>
        </div>
        <div class="card my-5">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-end mb-4">
              <h3 class="mb-0"><b>Forget Password</b></h3>
            </div>
            <div class="form-group mb-3">
                <h6 className='link-primary'>Type your email</h6>
                <p>we will send password set-up Link to your email. Plaese check inbox.</p>
              {/* <label class="form-label">Email Address</label> */}
              <input type="email" class="form-control" name='email' value={email.email} onChange={(e)=>setEmail({...email,email:e.target.value})}  placeholder="Email Address"/>
            </div>
            <div class="d-flex mt-1 justify-content-between">
            </div>
            <div class="d-grid mt-4">
              <button type="submit" class="btn btn-primary">Send email</button>
            </div>
          </div>
        </div>
        <div class="auth-footer row">
          {/* <!-- <div class=""> --> */}
            <div class="col my-1">
              <p class="m-0">Copyright © <a href="#">Codedthemes</a></p>
            </div>
            <div class="col-auto my-1">
              <ul class="list-inline footer-link mb-0">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                <li class="list-inline-item"><a href="#">Contact us</a></li>
              </ul>
            </div>
          {/* <!-- </div> --> */}
        </div>
        </form>
      </div>
    </div>
  </div>
  </>
  )
}

export default ForgetPassword