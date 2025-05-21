import { useGoogleLogin } from '@react-oauth/google'
import { Link } from 'react-router-dom'
import { googleAuth } from '../redux/slice/authSlice'
import { useDispatch } from 'react-redux'


const GoogleComponent = () => {
    const dispatch = useDispatch();
    const responseGoogle = async(authResult)=>{
        try {
            console.log(authResult,"authResult");
            if(authResult["code"]){
                dispatch(googleAuth(authResult["code"]));     
            }  
        } catch (error) {
            console.log("Error in code",error);
        }

    }
    const login = useGoogleLogin({
        flow:"auth-code",
        onSuccess:responseGoogle,
        onError:responseGoogle,
    })
  return (
  <>
  <Link onClick={login}>
    <img src="../src/assets/images/authentication/google.svg" alt="img" />
    <span class="d-none d-sm-inline-block"> Google</span>
  </Link>
  </>
  )
}

export default GoogleComponent