import { useState, useEffect } from "react";
import { getProducts } from "../api/controllerApi";


const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return products

}

export { useFetchProducts}