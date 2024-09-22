import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
const PlaceOrder = () => {
  const{getTotalCartAmmount}=useContext(StoreContext);
  return (
    <form className='place-order'>

      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name' />
        </div>
          <input type="email" placeholder='Email' />
          <input type="text" placeholder='' />
          <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
           <div>
           <div className="cart-total-details">
              <p>SubTotal</p>
              <p>Rs. {getTotalCartAmmount()}</p>
             </div>
             <hr />
             <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs. {getTotalCartAmmount()===0?0:100}</p>
             </div>
             <hr />
             <div className="cart-total-details">
              <b>Total</b>
              <b>Rs. {getTotalCartAmmount()===0?0:getTotalCartAmmount()+100}</b>
             </div>
           </div>
           <button >Paisa de!!</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
