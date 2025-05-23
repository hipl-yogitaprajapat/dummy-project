import { useEffect, useState } from 'react'
import { handleError, handleSuccess } from '../../utils';
import { ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { clearMessages, LoginUser } from '../redux/slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleComponent from './GoogleComponent';

const Login = () => {
  const [loginInfo,setLoginInfo]= useState({
    email:"",
    password:""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, error, message } = useSelector((state) => state.user);

    useEffect(() => {
      if (success) {        
        handleSuccess(message);
        dispatch(clearMessages());
        const role = localStorage.getItem("role");
        console.log(role,"role");
        
        setTimeout(() => {
          if(role === "client"){
          navigate("/color")
          }else if(role === "developer"){
          navigate("/typography")
          }else{
            navigate("/icons")
          }
      }, 1000);
      }
      if (error) {
        handleError(error);
        dispatch(clearMessages());
      }
    }, [success, error, dispatch, navigate]);
  
  const handleLogin=async(e)=>{
    e.preventDefault();
    const { email, password } = loginInfo       
    if (!email || !password) {
        return handleError("All fields are required")
    }
        dispatch(LoginUser(loginInfo));
  }

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;


  return (
   <>
    <div class="auth-main">
    <div class="auth-wrapper v3">
      <ToastContainer />
      <div class="auth-form">
        <form onSubmit={handleLogin}>
        <div class="auth-header">
          <a href="/dashboard"><img src="../src/assets/images/logo-dark.svg" alt="img"/></a>
        </div>
        <div class="card my-5">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-end mb-4">
              <h3 class="mb-0"><b>Login</b></h3>
              <a href="/register" class="link-primary">Don't have an account?</a>
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Email Address</label>
              <input type="email" class="form-control" name='email' value={loginInfo.email} onChange={(e)=>setLoginInfo({...loginInfo,email:e.target.value})} placeholder="Email Address"/>
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Password</label>
              <input type="password" class="form-control" name='password' value={loginInfo.password} onChange={(e)=>setLoginInfo({...loginInfo,password:e.target.value})} placeholder="Password"/>
            </div>
            <div class="d-flex mt-1 justify-content-between">
              <div class="form-check">
                <input class="form-check-input input-primary" type="checkbox" id="customCheckc1"/>
                <label class="form-check-label text-muted" for="customCheckc1">Keep me sign in</label>
              </div>
              <Link to="/forget-password"><h5 class="text-secondary f-w-400">Forgot Password?</h5></Link>
            </div>
            <div class="d-grid mt-4">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
            <div class="saprator mt-3">
              <span>Login with</span>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="d-grid">
                  <button type="button" class="btn mt-2 btn-light-primary bg-light text-muted">
                    <GoogleOAuthProvider clientId={googleClientId}>
                    <GoogleComponent/>
                    </GoogleOAuthProvider> 
                  </button>
                </div>
              </div>
              <div class="col-4">
                <div class="d-grid">
                  <button type="button" class="btn mt-2 btn-light-primary bg-light text-muted">
                    <img src="../src/assets/images/authentication/twitter.svg" alt="img"/> <span class="d-none d-sm-inline-block"> Twitter</span>
                  </button>
                </div>
              </div>
              <div class="col-4">
                <div class="d-grid">
                  <button type="button" class="btn mt-2 btn-light-primary bg-light text-muted">
                    <img src="../src/assets/images/authentication/facebook.svg" alt="img"/> <span class="d-none d-sm-inline-block"> Facebook</span>
                  </button>
                </div>
              </div>
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

export default Login