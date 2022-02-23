import React, {useEffect, useState} from 'react';
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";


export default function ProductList() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
        async function fetchProducts() {
            fetch('http://localhost/penjualan/getproduct.php')
            .then((res) => res.json())
            .then((res) => setProducts(res.message));  
        }
        fetchProducts();
    }, []);
    return (
        <div style={{textAlign:"center"}}>
            <h1>Product List</h1>
            {products.map((product) => (
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                padding={1}
                >
                <Grid item key={product.id} lg={3} md={3} sm={3} xs={3} component={Link} to={`/product/${product.idproduct}`}>
                    <img src={`http://localhost/penjualan/images/${product.idproduct}.jpg`} width="100%" alt="" />
                </Grid>
                <Grid item key={product.id} lg={6} md={6} sm={6} xs={6} sx={{textAlign:"left"}}>   
                    <p>{product.name}</p>
                    <p style={{textDecoration: "line-through"}}>{product.price}</p>
                    <p>{product.price * ((100 - product.discount) /100)}</p>
                </Grid>
                <Grid item key={product.id} lg={3} md={3} sm={3} xs={3}>   
                    <Button color='warning' sx={{ width: '100%'}} variant='contained'>
                        Buy
                    </Button>
                </Grid> 
            </Grid>
            ))}
            <Button color='warning' sx={{ width: '90%', marginBottom:3}} component={Link} to={'/checkout'} variant='contained'>
                Checkout
            </Button>
        </div>
    );
}