import { useEffect, useState } from 'react'
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearMessages, SignupUser } from '../redux/slice/authSlice';
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleComponent from './GoogleComponent';

const Register = () => {
  const [registerInfo, setregisterInfo] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    password: '',
    role:""
  })

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { success, error, message } = useSelector((state) => state.user);

  useEffect(() => {
    if (success) {
      handleSuccess(message);
      dispatch(clearMessages());
      setTimeout(() => navigate("/login"), 1000);
    }

    if (error) {
      handleError(error);
      dispatch(clearMessages());
    }
  }, [success, error, dispatch, navigate]);

  const handleRegistration = async (e) => {
    e.preventDefault();
    dispatch(SignupUser(registerInfo));
  }

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <>
    <div class="auth-main">
    <div class="auth-wrapper v3">
      <ToastContainer />
       <div class="auth-form">
      <form onSubmit={handleRegistration}>
        <div class="auth-header">
          <a href="/dashboard"><img src="../src/assets/images/logo-dark.svg" alt="img" /></a>
        </div>
        <div class="card my-5">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-end mb-4">
              <h3 class="mb-0"><b>Sign up</b></h3>
              <a href="/login" class="link-primary">Already have an account?</a>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group mb-3">
                  <label class="form-label">First Name*</label>
                  <input type="text" class="form-control" name="fname" value={registerInfo.firstName} onChange={(e) => setregisterInfo({ ...registerInfo, firstName: e.target.value })} placeholder="First Name" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-3">
                  <label class="form-label">Last Name</label>
                  <input type="text" class="form-control" name="lname" value={registerInfo.lastName} onChange={(e) => setregisterInfo({ ...registerInfo, lastName: e.target.value })} placeholder="Last Name" />
                </div>
              </div>
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Company</label>
              <input type="text" class="form-control" name="company" value={registerInfo.company} onChange={(e) => setregisterInfo({ ...registerInfo, company: e.target.value })} placeholder="Company" />
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Email Address*</label>
              <input type="email" class="form-control" name="email" value={registerInfo.email} onChange={(e) => setregisterInfo({ ...registerInfo, email: e.target.value })} placeholder="Email Address" />
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Password</label>
              <input type="password" class="form-control" name="password" value={registerInfo.password} onChange={(e) => setregisterInfo({ ...registerInfo, password: e.target.value })} placeholder="Password" />
            </div>
                  <div class="form-group mb-3">
                    <label class="form-label">Role</label>
                    {/* <input type="password" class="form-control" name="password" value={registerInfo.password} onChange={(e) => setregisterInfo({ ...registerInfo, password: e.target.value })} placeholder="Password" /> */}
                    <select
                      className="form-control"
                      value={registerInfo.role}
                      onChange={(e) => setregisterInfo({ ...registerInfo, role: e.target.value })}
                      required
                    >
                      <option>-- Select Role --</option>
                      <option value="tester">Tester</option>
                      <option value="client">Client</option>
                      <option value="developer">Developer</option>
                    </select>
            </div>
            <p class="mt-4 text-sm text-muted">By Signing up, you agree to our <a href="#" class="text-primary"> Terms of Service </a> and <a href="#" class="text-primary"> Privacy Policy</a></p>
            <div class="d-grid mt-3">
              <button type="submit" class="btn btn-primary">Create Account</button>
            </div>
            <div class="saprator mt-3">
              <span>Sign up with</span>
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
                    <img src="../src/assets/images/authentication/twitter.svg" alt="img" /> <span class="d-none d-sm-inline-block"> Twitter</span>
                  </button>
                </div>
              </div>
              <div class="col-4">
                <div class="d-grid">
                  <button type="button" class="btn mt-2 btn-light-primary bg-light text-muted">
                    <img src="../src/assets/images/authentication/facebook.svg" alt="img" /> <span class="d-none d-sm-inline-block"> Facebook</span>
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

export default Register