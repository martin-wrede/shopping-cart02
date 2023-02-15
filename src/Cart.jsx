import React, {useContext} from "react"
import {Context} from "./Context"
import CartItem from "./components/CartItem"

function Cart() {
    const {cartItems, setCartItems} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))


    function order(){
        if (cartItems.length > 0) {
            document.getElementById("order").textContent= "Ordering..."
            setTimeout(showPayment,3000)
        } else {
            document.getElementById("order").textContent= "keine Order"   
        }
        
    }
    function showPayment(){
        // console.log("Order placed")
        setCartItems([])
        document.getElementById("order").textContent= "Order placed"

    }
       
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {cartItems.length * 5.99} </p>
            <div className="order-button">
                <button onClick={order}>Place Order</button>
            </div>
            <div id="order"></div>
        </main>
    )
}

export default Cart