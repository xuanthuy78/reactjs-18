import React, { Component } from 'react';

export const CartContext = React.createContext();

class CartProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems: []
        };
        this.addTocart = this.addTocart.bind(this);
    }

    addTocart(product) {
        console.log('dsfad', product)
        this.setState( {
            cartItems : this.state.cartItems.concat(product)
        })
    }

    render() {
        return (
            <CartContext.Provider value = {{
                cartItems: this.state.cartItems,
                addTocart : this.addTocart
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export default CartProvider;

