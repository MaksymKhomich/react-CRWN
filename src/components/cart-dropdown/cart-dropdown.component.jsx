import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom'

import { EmptyMessage, CartDropdownContainer, CartItems } from './cart-dropdown.style'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const {cartItems, setIsCartOpen, isCartOpen} = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
        setIsCartOpen(!isCartOpen);
    }
    return (
        <CartDropdownContainer>
            <CartItems>
            {
                cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )
            }
            
            </CartItems>
                <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;