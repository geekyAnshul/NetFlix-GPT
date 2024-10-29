import React, { useRef, useState } from 'react'
import Header from './Header'
import {validateInfo} from '../utils/validate'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
//import Browse from './Browse';

const Login = () => {
    const [sign,setSign] = useState(true);
    const [errMsg,seterrMsg] = useState(null);
    const navigate =useNavigate();
    const dispatch = useDispatch();

     const email = useRef(null);
     const password = useRef(null);
     const naam=useRef(null);

   

     const checkInfo=()=>{
         const message=validateInfo(email.current.value,password.current.value);
         seterrMsg(message);
     
          ///matlab agar message aa gya h...error ho chuka to return krdo....no need to check sign in sign out
         if (message) {
          setTimeout(() => seterrMsg(null), 3000);
          return;
      }
     if(!sign){
      //sign up Logicccccc
        createUserWithEmailAndPassword(
          auth, 
            email.current.value,
             password.current.value,
            )
             .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                  displayName: naam.current.value, photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
                }).then(() => {
                  // Profile updated!
                  // ...
                  const {uid,email,displayName,photoURL} = auth.currentUser;
                  dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL,}))
                  navigate('/browse');
                }).catch((error) => {
                  seterrMsg(error.message)
                });
                // console.log(user);
                
                // ...
              })
              .catch((error) => {
                //const errorCode = error.code;
                //const errorMessage = error.message;
                seterrMsg("Sign-up unsuccessful.Ensure all details are correct and try once more");
                setTimeout(() => seterrMsg(null), 3000);
                // ..
              });
     }else{
      signInWithEmailAndPassword(auth,
         email.current.value, 
         password.current.value,
       )
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       console.log(user);
        navigate('/browse')
        // ...
      })
      .catch((error) => {
        //const errorCode = error.code;
        //const errorMessage = error.message;
        seterrMsg("Invalid credentials. Double-check your email and password and try again.");
        setTimeout(() => seterrMsg(null), 3000);
      });
    
     }
    };
    const toggleNow = ()=>{
        setSign(!sign);
    }



  return (
    <div className='text-white'>
        <Header/>
        <img className='bg-gradient-to-b from-black' src='https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg' alt='netflix'/>

        <div className='mx-auto'>
        <div className='bg-black bg-opacity-80 rounded-md  absolute top-52 left-[500px] h-[520px] w-96 flex flex-col items-center py-10'>
            <h1 className='text-4xl font-semibold text-white mb-8'>{sign ? "Sign In" : "Sign Up"}</h1>
            <form onSubmit={(e)=>e.preventDefault()}>
                {sign ? null :  <input ref={naam}   className='block w-80 px-5 py-3 m-2 bg-zinc-700 rounded-sm text-white mb-5 outline-none font-semibold' type='text' placeholder='Enter Your Full name'/> }


                <input ref={email} className='block w-80 px-5 py-3 m-2 bg-zinc-700 rounded-sm text-white mb-5 outline-none font-semibold' type='text' placeholder='Email Address'/>


                <input ref={password} className='block w-80 px-5 py-3 m-2 bg-zinc-700 rounded-sm text-white mb-5 outline-none font-semibold' type='password' placeholder='Password'/>


                <button className='block w-80 rounded-sm font-semibold px-5 py-3 m-2 mb-5 bg-red-600' type='submit' onClick={checkInfo}>{sign ? "Sign In" : "Sign Up"}</button>

                <p className='text-red-600 leading-tight tracking-tight text-md mb-5 ml-3 w-80 font-medium'>{errMsg}</p>
                <input type="checkbox"  name="fruit" value="Apple" className='w-10 h-4 bg-slate-400'></input>
                <label  className='text-md'>Remember me</label>


                <p className=' cursor-pointer ml-3 mt-5 text-lg' onClick={toggleNow}>{sign ? "New to Netflix ? Sign up now." : "Already have a account? Sign in now"}</p>

                {sign ? <a className=' cursor-pointer ml-3 mt-10 text-lg underline text-yellow-500' href='https://www.netflix.com/login'> Try Netflix-GPT premium package </a> : null }
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login