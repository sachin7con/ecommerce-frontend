import ProductCard from "../components/ProductCard";

const products = [
    {id:1, title:"iPhone", price:70000 },
    {id:2, title:"Shoes", price:2000},
    {id:3, title:"Headphones", price:2000 },
]

function Product({cart, setCart}){
    
    function addToCart(product){
        const exists = cart.find((item) => item.id === product.id)
        
    if(exists){
        //add
        const updatedCart = cart.map((item) => item.id === product.id ? {...item, qty: item.qty +1 } : item);
        setCart(updatedCart); 

    } else{
        setCart([...cart, {...product, qty:1}])
    }
    }
   
    return(<div style={StyleSheet.container}>
        {products.map((item) => (
            <ProductCard key={item.id} product={item}  addToCart={addToCart} />
        ) )}

    </div>)
}

const styles = {
    container : {
        display: "flex",
        flexwrap: "wrap",
        gap: "20px",
        padding: "20px",
    },
}

export default Product;