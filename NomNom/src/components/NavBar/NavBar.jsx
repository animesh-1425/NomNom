import React, { act, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import { toast } from 'react-toastify'
const NavBar = ({setShowLogin}) => {

    const [menu,setMenu]=useState("Home");

    const{getTotalCartAmmount,token,setToken}=useContext(StoreContext);
    const navigate=useNavigate()
    const logoutHandler=()=>{
       localStorage.removeItem("token");
       setToken("")
       navigate("/")
       toast.success("Logged Out")
       const interval = setInterval(() => {
        window.location.reload();
      }, 500);
    }
    
    // useEffect(()=>{
    //   getTotalCartAmmount
    // },[token])

    // const dropdown = document.querySelector('.navbar-profile');

    //   dropdown.addEventListener('click', function() {
    //   dropdown.classList.toggle('clicked');
    //   });

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" className='logo'/></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>{setMenu("Home")}} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>{setMenu("Menu")}} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#footer' onClick={()=>{setMenu("Contact Us")}} className={menu==="Contact Us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="searchicon" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img  src={assets.basket_icon} alt="" /></Link>  
            <div className={getTotalCartAmmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
        :
        <div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className='navbar-profile-dropdown'>
         
            <li>
            <img src={assets.bag_icon } alt="" />
            <p>Hi Animesh</p>
            </li>
            <hr />
            <li> 
            <img src={assets.bag_icon} alt="" />
            <p>Orders</p>
            </li>
            <hr />
            <li onClick={logoutHandler}>
              <img src={assets.logout_icon} alt="" />
              <p>Logout</p>
            </li>
          </ul>
        </div>}
        
      </div>
    </div>
  )
}

export default NavBar
