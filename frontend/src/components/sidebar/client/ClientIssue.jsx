import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';

const ClientIssue = () => {
      const [updateInfo, setUpdateInfo] = useState({
        firstName: '',
        lastName: '',
        company: '',
        password: '',
        image:"",
        preview: ''
      })
  return (
    <>
     <div class="auth-main">
        <div class="auth-wrapper v3">
          <ToastContainer />
          <div class="auth-form">
            <form onSubmit={""}>
              <div class="auth-header">
                <a href="/client"><img src="../src/assets/images/logo-dark.svg" alt="img" /></a>
              </div>
              <div class="card my-5">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-end mb-4">
                    <h3 class="mb-0"><b>Client Issue</b></h3>
                  </div>

                  <div class="row">
                      <div class="form-group mb-3">
                        <label class="form-label">Task Name*</label>
                        <input type="text" class="form-control" name="fname" value={updateInfo.firstName} onChange={(e) => setUpdateInfo({ ...updateInfo, firstName: e.target.value })} placeholder="First Name" />
                      </div>
                  </div>
                  <div class="form-group mb-3">
                    <label class="form-label">Issue</label>
                    <input type="text" class="form-control" name="company" value={updateInfo.company} onChange={(e) => setUpdateInfo({ ...updateInfo, company: e.target.value })} placeholder="Company" />
                  </div>
                  <div class="form-group mb-3">
                    <label class="form-label">Priority</label>
                    <input type="password" class="form-control" name="password" value={updateInfo.password} onChange={(e) => setUpdateInfo({ ...updateInfo, password: e.target.value })} placeholder="Password" />
                  </div>
                  <div class="form-group mb-3">
                    <label class="form-label">Description</label>
                    <input type="text" class="form-control" name="company" value={updateInfo.company} onChange={(e) => setUpdateInfo({ ...updateInfo, company: e.target.value })} placeholder="Company" />
                  </div>
                  <p class="mt-4 text-sm text-muted">By Signing up, you agree to our <a href="#" class="text-primary"> Terms of Service </a> and <a href="#" class="text-primary"> Privacy Policy</a></p>
                  <div class="d-grid mt-3">
                    <button type="submit" class="btn btn-primary">Update</button>
                  </div>
                  <div class="saprator mt-3">
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

export default ClientIssue