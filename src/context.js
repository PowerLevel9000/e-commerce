import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();
// Provider


// consumer


class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () =>{
    let tempProducts = [];
    storeProducts.forEach(item=>{
      const singleItem = {...item };
      tempProducts = [...tempProducts,singleItem];
    })
    this.setState(()=>{
      return {products:tempProducts}
    })
  }

  handleDetail = (event) => {
    event.stopPropagation()
    console.log("Hello from detials")
  }

  addToCart = (id) => {
    console.log("Hello from add to cart :  ", id)
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