import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'
import { Link } from 'react-router-dom'
import { googleAuth } from '../redux/slice/authSlice'

const GoogleComponent = () => {

    const responseGoogle = async(authResult)=>{
        try {
            // console.log(authResult,"authResult");
            if(authResult["code"]){
                const result = await googleAuth(authResult["code"]);
                const {email, name} = result.data.user;
                console.log(result.data.user,"result.data.user");
                
            }
            
        } catch (error) {
            console.log("Error in code",error);
            
        }

    }
    const login = useGoogleLogin({
        onSuccess:responseGoogle,
        onError:responseGoogle,
        flow:"auth-code"
    })
  return (
  <>
  <Link onClick={login}>With Google</Link>
  <GoogleLogin/>
  </>
  )
}

export default GoogleComponent