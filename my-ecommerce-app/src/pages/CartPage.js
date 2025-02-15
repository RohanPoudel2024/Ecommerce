import React from 'react';

const CartPage = () => {
    const [cartItems, setCartItems] = React.useState([]);

    React.useEffect(() => {
        // Fetch cart items from local storage or API
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(items);
    }, []);

    const handleRemoveItem = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleCheckout = () => {
        // Logic for checkout process
        alert('Proceeding to checkout...');
    };

    return (
        <div className="cart-page">
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <h2>{item.title}</h2>
                                <p>Price: ${item.price}</p>
                                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleCheckout}>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default CartPage;