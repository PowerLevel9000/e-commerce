import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();


class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTotal: 0,
    cartTax: 0,
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    })
    this.setState(() => {
      return { products: tempProducts }
    })
  }

  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product
  }

  handleDetail = (id) => {
    const prod = this.getItem(id)
    this.setState(() => {
      return { detailProduct: prod }
    })
  }

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price
    this.setState(() => {
      return {
        product: tempProducts,
        cart: [...this.state.cart, product]
      }
    }, () => { this.addTotal(); })
  }

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalProduct: product,
        modalOpen: true,
      }
    });
  }

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false }
    })
  }

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const uniqueProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(uniqueProduct);
    const product = tempCart[index];
    product.count += 1;
    product.total = product.count * product.price;

    this.setState(() => {
      return {
        cart: [...tempCart]
      }
    }, () => {
      this.addTotal();
    })
  }

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const uniqueProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(uniqueProduct);
    const product = tempCart[index];
    product.count = product.count - 1
    if(product.count === 0) {
      this.removeItem(id)
    }else{
      product.total = product.count * product.price;
      this.setState(() => {
        return {
          cart: [...tempCart]
        }
      }, () => {
        this.addTotal();
      })
    }
  }

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      };
    }, () => {
      this.addTotal();
    });

  }

  clearCart = (id) => {
    this.setState(() => {
      return {
        cart: []
      }
    }, () => {
      this.setProducts();
      this.addTotal();
    });
  }

  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map(item => {
      subTotal += item.total
      return null
    });
    const tempTax = subTotal * 0.18;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = parseFloat((subTotal + tax).toFixed(2));

    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      }
    })
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        clearCart: this.clearCart,
        removeItem: this.removeItem
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };