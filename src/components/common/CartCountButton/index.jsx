import React from 'react'
import './style.css'
import { useNavigate } from 'react-router'
import { selectCartItemsCount } from '../../../redux/cart/cart.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';



const CartCountButton = ({ cartCount }) => {
  let navigate = useNavigate();
  return (
    <div className='btnCartCount' onClick={() => { navigate('/cart'); }}>
      <div className='count'>{cartCount >= 100 ? '99+' : cartCount}</div>
      <i className='fa fa-shopping-cart'></i>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartCountButton);