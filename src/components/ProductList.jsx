import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid2";
import Product from "./Product";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Grid container spacing={3} padding={3}>
      {products.map((product) => (
        <Product productdetails={product} key={product.id} />
      ))}
    </Grid>
  );
};

export default ProductList;
