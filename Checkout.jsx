import React from 'react';
import"./Checkout.css";
function Checkout() {
  return (
  <div className="checkout">
    <div className="checkout_left">
        <img className='checkout_ad' src=' https://i.pinimg.com/originals/ee/24/de/ee24deaa91b12fa6061f29e51c795704.jpg' alt=''/>

        <div>
            <h2 className='checkout_title'> Your shopping basket</h2>
        </div>
    </div>

    <div className="checkout_right">
        <h2> the sub total will go here </h2>
    </div>
  </div>
  )
}

export default Checkout;
