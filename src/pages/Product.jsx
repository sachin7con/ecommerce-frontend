import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    title: "iPhone",
    price: 70000,
    img: "https://dummyimage.com/150x150/000/fff&text=iPhone"
  },
  {
    id: 2,
    title: "Shoes",
    price: 2000,
    img: "https://dummyimage.com/150x150/000/fff&text=Shoes"
  },
  {
    id: 3,
    title: "Headphones",
    price: 2000,
    img: "https://dummyimage.com/150x150/000/fff&text=Headphones"
  }
];

function Product({cart, setCart}){
    
    function addToCart(product){
        const exists = cart.find((item) => item.id === product.id)
        
    if(exists){
        //add
        const updatedCart = cart.map((item) => item.id === product.id ? {...item, qty: item.qty +1 } : item);
        setCart(updatedCart); 
        alert(`${product.title} added to cart`);

    } else{
        setCart([...cart, {...product, qty:1}])
    }
    }
   
    return (
  <div style={styles.container}>
    {products.map((item) => (
      <ProductCard
        key={item.id}
        product={item}
        addToCart={addToCart}
      />
    ))}
  </div>
);
}

const styles = {
    container : {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
    },
}

export default Product;