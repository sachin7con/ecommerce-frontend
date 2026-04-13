function ProductCard({product, addToCart}){

    return(
        <>
        <div style={styles.card}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>

            <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </>
    )
}


const styles = {
    card :{
        border: "1px solid #ddd",
        padding: "10px",
        width: "200px",
        borderRadius: "8px",
        textAlign: "center",
    },
}

export default ProductCard;