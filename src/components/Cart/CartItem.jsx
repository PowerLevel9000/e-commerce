import React from 'react'

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value
  return (
    <div className='row my-1 text-capitalize text-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt='product'
        />
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>product : </span>
        {title}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>price :</span>
          {price} $
      </div>
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btncomponent bg-primary btn-black mx-1"
              onClick={() => decrement(id)}
            >
              - 1
            </span>
            <span className='btn btncomponent bg-primary btn-black mx-1'>
              {count}
            </span>
            <span className="btn btncomponent bg-primary btn-black mx-1"
              onClick={() => increment(id)}
            >
              + 1
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='col-10 mx-auto col-lg-2'>
        <div className="cart-icon" onClick={() => {
          removeItem(id)
        }}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <strong>
          Item total : $ {total}
        </strong>
      </div>
    </div>
  )
}

export default CartItem
