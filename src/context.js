import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();
// Provider


// consumer


class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
  }
  handleDetail = (event) => {
    event.stopPropagation()
    console.log("Hello from detials")
  }
  addToCart = () => {
    console.log("Hello from add to cart")
  }
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };