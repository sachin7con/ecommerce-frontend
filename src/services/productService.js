import axios from "axios";

const API = "https://dummyjson.com/products";

export const fetchProducts = async () => {
  const response = await axios.get(API);

  return response.data.products;
};