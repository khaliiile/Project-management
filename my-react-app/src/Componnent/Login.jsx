
import bgImage from '../img/bg.jpg';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "../api/axios.jsx";

const Login = () => {
    const [email,setEmail]=useState('')
    const [password ,setPassword]=useState('')
    const navigate=useNavigate();
    //const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const handelLogin=async (event)=>{
    event.preventDefault();

    try {
      await axios.post('/login',{email,password})
        setEmail('')
        setPassword('')
        navigate('/')
    }catch (e){
        console.log('error')
    }

    };
    return (
       <>
           <div className='container mt-0'>
               <section className="flex flex-col md:flex-row h-screen items-center">
                   <div className="bg-blue-600 w-full md:w-1/2 xl:w-2/3 h-screen">
                       <img src={bgImage} alt="" className="w-full h-full object-cover"/>
                   </div>

                   <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

                       <div className="w-full h-100">

                           <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

                           <form className="mt-6"  onSubmit={handelLogin} >
                               <div>
                                   <label className="block text-gray-700">Email Address</label>
                                   <input
                                       type="email"
                                       name="email"
                                       value={email}
                                       onChange={(e)=>setEmail(e.target.value)}
                                       placeholder="Enter Email Address"
                                       className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                       autoFocus
                                       autoComplete="required"
                                   />
                               </div>

                               <div className="mt-4">
                                   <label className="block text-gray-700">Password</label>
                                   <input

                                       type="password"
                                       name="password"
                                       value={password}
                                       onChange={(e)=>setPassword(e.target.value)}
                                       placeholder="Enter Password"
                                       minLength="6"
                                       className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                       required
                                   />
                               </div>

                               <div className="text-right mt-2">
                                   <Link
                                       className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                                       to='/forget'>
                                       Forgot Password?
                                   </Link>
                               </div>

                               <button
                                   type="submit"
                                   className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                                  px-4 py-3 mt-6"

                               >
                                   Log In
                               </button>
                           </form>

                           <hr className="my-6 border-gray-300 w-full"/>

                           <span

                               className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
                           >
                               <div className="flex items-center justify-center">
                                   <Link to='/register' className="ml-4">
                                       Register
                                   </Link>
                               </div>
                           </span>


                           <footer className="text-sm text-gray-500 mt-12">&copy; 2021 - All Rights Reserved.</footer>
                       </div>
                   </div>
               </section>
           </div>
       </>
    );
};

export default Login;
