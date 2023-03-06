import React from 'react'
import { Link } from 'react-router-dom'

const CartTotals = ({ value }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value
  console.log( cartSubTotal, cartTax, cartTotal, clearCart )
  return (
    <>
      <div className="container mx-0">
        <div className="row">
          <div className="text-right d-flex flex-column align-items-end col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 justify-content-end text-capitalize">
            <Link to="/">
              <button className='btn btn-outline-danger
                text-uppercase mb-3 px-5
              '
                onClick={() => {
                  clearCart()
                }}
                type='button'>
                Clear Cart
              </button>
            </Link>
            <h5>
              <span className="text-title">
                SubTotal : 
              </span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">
                tax : 
              </span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">
                total : 
              </span>
              <strong>$ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartTotals
