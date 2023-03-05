import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer } from '../context'
export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title name='our' title='products' />
            {/* row starts */}
            <div className='row'>
              <ProductConsumer>
                {(val)=>{
                  return val.products.map(product=>{
                    return (
                      <Product product={product} key={product.id} />
                    )
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
      // <Product />
    )
  }
}
