import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
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
            <img src={logo} alt="store" className='navbar-brand' />
          </Link>
          <ul className='navbar-nav align-items-center'>
            <li className='nav-item ml-5'>
              <Link className='nav-link' to="/">product</Link>
            </li>
          </ul>
        </div>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <i className="fa-solid fa-cart-shopping">my cart</i>
          </ButtonContainer>
        </Link>
      </NavWrapper >
    )
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform: capitalize;
  }
`