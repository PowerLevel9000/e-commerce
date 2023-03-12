import React, { Component } from 'react'
import styled from 'styled-components'
import { CirclesWithBar } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import { PropTypes } from "prop-types"

export default class Product extends Component {
  state = {
    loading: true
  };

  handleImageLoaded = () => {
    this.setState({ loading: false });
  };

  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          {this.state.loading && (
            <CirclesWithBar color="rgba(56, 160, 186, 0.8)" height="300" width="250"/>
          )}
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => {
                  value.handleDetail(id);
                }}
              >
                <Link to="/details">
                  <img
                    src={img}
                    alt="product"
                    className="card-img-top"
                    onLoad={this.handleImageLoaded}
                  />
                </Link>
                <button
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                  className="cart-btn"
                  type="button"
                  disabled={inCart ? true : false}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      in cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}


Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired
};


const ProductWrapper = styled.div`
  .card {
    border-color:transparent;
    transition: all .5s linear;
    box-shadow:
      2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      100px 100px 80px rgba(0, 0, 0, 0.07);
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all .5s linear;
  }

  &:hover{
    .card {
      border:0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2);
    }

    .card-footer {
      background: rgba(200,200,200);
    }
  }
  .img-container {
    position:relative;
    overflow:hidden;
  }

  .card-img-top {
    transition: all .5s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size:1.4rem;
    border-radius: 0.5rem 0 0 0 ;
    transform: translate(100%,100%);
    transition: all .5s linear;
  }

  .img-container:hover .cart-btn {
    transform: translate(0,0)
  }

  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`