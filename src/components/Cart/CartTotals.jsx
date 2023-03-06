import React from 'react'
import { Link } from 'react-router-dom'

const CartTotals = ({ value }) => {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="text-right col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize">
            <Link to="/">
              <button className='btn btn-outline-danger
                text-uppercase mb-3 px-5
              '
              onClick={()=>{
                clearCart()
              }}
              type='button'>
                Clear Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartTotals
