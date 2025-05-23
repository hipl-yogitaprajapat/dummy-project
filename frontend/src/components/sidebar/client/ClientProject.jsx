import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { clearMessages } from '../../redux/slice/authSlice'
import { AddClientProject } from '../../redux/slice/clientSlice'
import { handleError, handleSuccess } from '../../../utils'

const ClientProject = () => {
    const [clientProjectInfo, setclientProjectInfo] = useState({
        projectname: '',
        description: '',
        priority: '',
    })
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { success, error, message } = useSelector((state) => state.client);
    console.log(success,"successsssss");
    console.log(error,"errorrr");
    console.log(message,"messageee");

      useEffect(() => {
    if (success) {
        console.log(success,"success"); 
      handleSuccess(message);
      dispatch(clearMessages());
      setTimeout(() => navigate("/client"), 1000);
    }

    if (error) {
      handleError(error);
      dispatch(clearMessages());
    }
  }, [success, error,message, dispatch, navigate]);

    const handlenewProject = async (e) => {
        e.preventDefault();
        dispatch(AddClientProject(clientProjectInfo));
    }

    return (
        <>
            <div class="auth-main">
                <div class="auth-wrapper v3">
                    <ToastContainer />
                    <div class="auth-form">
                        <form onSubmit={handlenewProject}>
                            <div class="auth-header">
                                <a href="/client"><img src="../src/assets/images/logo-dark.svg" alt="img" /></a>
                            </div>
                            <div class="card my-5">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-end mb-4">
                                        <h3 class="mb-0"><b>New Project</b></h3>
                                    </div>

                                    <div class="row">
                                        <div class="form-group mb-3">
                                            <label class="form-label">Project Name*</label>
                                            <input type="text" class="form-control" name="projectname" value={clientProjectInfo.projectname} onChange={(e) => setclientProjectInfo({ ...clientProjectInfo, projectname: e.target.value })} placeholder="Priority Name" />
                                        </div>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label">Description</label>
                                        <input type="text" class="form-control" name="description" value={clientProjectInfo.description} onChange={(e) => setclientProjectInfo({ ...clientProjectInfo, description: e.target.value })} placeholder="Description" />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label">Priority</label>
                                        <select
                                            className="form-control"
                                            value={clientProjectInfo.priority}
                                            onChange={(e) => setclientProjectInfo({ ...clientProjectInfo, priority: e.target.value })}
                                            required
                                        >
                                            <option>-- Select Priority --</option>
                                            <option value="high">High</option>
                                            <option value="medium">Medium</option>
                                            <option value="low">Low</option>
                                        </select>
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

export default ClientProject