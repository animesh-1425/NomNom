import React, { useContext, useState ,useEffect} from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { toast} from 'react-toastify';
const Loginpopup = ({setShowLogin}) => {

  const {url,setToken}=useContext(StoreContext)
  const[curState,setCurState]=useState('Sign Up')
  const[data,setData]=useState({name:"",email:"",password:""})

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  

  const onLogin=async(event)=>{
    event.preventDefault()
    let newUrl=url;
    if(curState==="Login"){
      newUrl+="/api/user/login"
    }
    else{
       newUrl+="/api/user/register"
    }
    const response= await axios.post(newUrl,data)
    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token)
      setShowLogin(false)
      toast.success("Welcome Coach!!")
      const interval = setInterval(() => {
        window.location.reload();
      }, 500);
    }
    else{
      setShowLogin(false)
      toast.error("Wrong Credentials")
    }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{curState}</h2>
            <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {curState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Apka Naam' required/>}
          <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Apka email' required/>
          <input name='password' onChange={onChangeHandler} value={data.password} type="text" placeholder='Password dijie' required />
        </div>
          <button type='submit'>{curState==="Sign Up"?"Create Account":"Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>Sara Jaidat mere nam krre ho..</p>
          </div>
          {curState==="Login"?<p>Create a new account?<span onClick={()=>setCurState("Sign Up")}>Click here</span></p>: <p>Already have an account?<span onClick={()=>{setCurState("Login")}}>Login here</span></p>}
          
      </form>
    </div>
  )
}

export default Loginpopup
