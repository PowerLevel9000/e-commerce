import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import { ButtonContainer } from './button'
import styled from 'styled-components'
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm d-flex navbar-dark px-sm-5 justify-content-between'>
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk  */}
        <div className='d-flex justify-content-between'>
          <Link to='/'>
            <img src={logo} alt="store" className='navbar-brand' height="60px" />
          </Link>
          <ul className='navbar-nav align-items-center'>
            <li className='nav-item ml-5'>
              <Link className='nav-link' to="/">Shophollic</Link>
            </li>
          </ul>
        </div>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <span className='me-2'><i className="fa-solid fa-cart-shopping" mr-2></i></span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper >
    )
  }
}

const NavWrapper = styled.nav`
  font-family: 'Permanent Marker', sans-serif;
  background: rgb(115,44,163);
  background: linear-gradient(90deg, rgba(115,44,163,1) 0%, rgba(182,1,1,1) 33%, rgba(48,30,255,1) 100%);  
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform: capitalize;
  }
`;