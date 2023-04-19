import {auth, provider} from "../../firebase/utils.js";
import { signInWithPopup } from "firebase/auth"; 
import { useNavigate } from "react-router";

import google from "./assests.signin/google.svg";
import apple from "./assests.signin/apple.svg"
import "./sign-in.styles.css";

function SignIn(){

    const navigate = useNavigate()
    const handleClick = () =>{
        signInWithPopup(auth,provider).then((res) => {
            navigate('/dashboard')
        });
    }
    
    return(
        <div className="main-signin-container">
            <div className="board-box"><span>Board.</span></div>
            <div className="sign-in-box">
                <div className="sign-in-inner">
                
                {/* headings */}
                <h1 className="head">Sign In</h1>
                <p style={{marginBottom : "15px"}}>Sign in to your account</p>

                {/* buttons */}
                <div className="extra-btn-container">
                    <button className="extra-btn google-btn" onClick={handleClick}>
                        <img className="extra-icons" src={google} alt="" />
                        Sign in with Google
                    </button>
                    <button className="extra-btn apple-btn">
                        <img className="extra-icons" src={apple} alt="" />
                        Sign in with Apple
                    </button>
                </div>

                {/* signin form  */}
                <form  className="form-conatiner">
                    <label htmlFor="">Email address</label>
                    <input type="email" placeholder="johndoe@gmail.com"/>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="********"/>
                    <p><a href="/">Forgot password?</a></p>
                    <button className="submit-form" >Sign In</button>
                </form>

                <p style={{marginTop: "20px", textAlign :"center"}}>Don't have an account?<span><a href="/"> Register here</a></span></p>
                </div>
            </div>
        </div>
    )
};

export default SignIn;