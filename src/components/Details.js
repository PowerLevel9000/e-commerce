import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './button'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(val) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = val.detailProduct;  
          return (
            <div className='container py-5'>
              {/* title */}
              <div className='row'>
                <div className='
                col-10 mx-auto text-center 
                text-slanted text-blue my-5'
                >
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className='row'>
                <div className='
                col-10 mx-auto col-md-6
                my-3 
              '>
                  {/* product img */}
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div className='
                col-10 mx-auto col-md-6
                my-3 text-capitalize
              '>
                  <h2>model : {title}</h2>
                  <h4 className='text-title text-uppercase 
                  text-muted mt-3 mb-2
                '>
                    made by : <span className='text-uppercase'>
                      {company}
                    </span>
                    </h4>
                    <h5 className='text-blue text-title text-uppercase
                      mt-1 mb-2
                    '>
                      price : <span>$</span>
                      {price}
                    </h5>
                  <p className='text-capitalize text-title text-bright m-2 font-weight-bold mt-3 mb-0'>
                    some info about product:
                  </p>
                  <p className='text-muted lead'>{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back to Products</ButtonContainer>
                    </Link>
                    <ButtonContainer disabled={inCart?true:false}
                      onClick={()=>{
                        val.addToCart(id);
                        val.handleDetail(id)
                      }}
                      cart
                    >
                      {inCart?'in cart':"add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>

            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
