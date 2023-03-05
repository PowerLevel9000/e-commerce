import React, { Component } from 'react'

export default class CartColumns extends Component {
  render() {
    return (
      <div className='container-fluid text-center
        d-none d-lg-block 
      '>
        <div className='row'>
          <div className='col-10 mx-auto col-lg-2'>
            <h5 className='font-weight-bold text-uppercase'>products</h5>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <h5 className='font-weight-bold text-uppercase'>name of products</h5>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <h5 className='font-weight-bold text-uppercase'>price</h5>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <h5 className='font-weight-bold text-uppercase'>quantity</h5>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <h5 className='font-weight-bold text-uppercase'>remove</h5>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <h5 className='font-weight-bold text-uppercase'>total</h5>
          </div>
        </div>
      </div>
    )
  }
}
