import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid2";
import SkeletonProduct from "./SkeletonProduct";
import Product from "./Product";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch products from API
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://dummyjson.com/products")
        .then((response) => {
          setProducts(response.data.products);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching products:", error));
    }, 5000);
  }, []);

  return (
    <Grid container spacing={3} padding={3}>
      {loading
        ? Array.from(new Array(8)).map((_, index) => (
            <Grid size={{ xs: 12, sm: 4, md: 3, lg: 2 }} key={index + "1"}>
              <SkeletonProduct />
            </Grid>
          ))
        : products.map((product) => (
            <Product productdetails={product} key={product.id} />
          ))}
    </Grid>
  );
};

export default ProductList;
