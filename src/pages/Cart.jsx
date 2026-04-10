function Cart({ cart, setCart }) {

    function decreaseQuantity(id){
            const updatedCart = cart.map((item) => 
                item.id===id ? {...item, qty: item.qty-1} : item
            ).filter((item) => item.qty>0);
            setCart(updatedCart);
    }

    function increaseQuantity(id){
        const updatedCart = cart.map((item) => 
        item.id === id ? {...item, qty: item.qty+1} : item);
        setCart(updatedCart);
    }


  function removeItem(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }

  function totalPrice() {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  }

  return ( 
    <div style={StyleSheet.container}>
      <h2>🛒 Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id}  style={StyleSheet.card}>
          
          <h3>{item.title}</h3>
          <p>₹{item.price}</p>

          <div>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span style={{ margin:"10px" }}>{item.qty}</span>
          <button onClick={() => increaseQuantity(item.id)}>+</button>

          <button onClick={() => removeItem(item.id)}>Remove</button>

          </div>
        </div>
      ))}

      <h3>Total: ₹{totalPrice()}</h3>
    </div>
  );
}

const styles ={
    container:{
        padding : "20px",
    },
    card :{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        marginbottom:"10px",
    },

} 
export default Cart;