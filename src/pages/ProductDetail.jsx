import React, {useEffect, useState} from 'react';
import { Grid, Button } from "@mui/material";
import { useParams } from "react-router";

function ProductDetail() {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    
    useEffect(() => {
        async function fetchDetails() {
            fetch(`http://localhost/penjualan/getproductdetail.php?id=${id}`)
            .then((res) => res.json())
            .then((res) => setDetails(res));  
        }
        fetchDetails();
    }, []);
    return (
        <div style={{textAlign:"center"}}>
            <h1>Product Detail</h1>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                padding={1}>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <img src={`http://localhost/penjualan/images/${details.idproduct}.jpg`} width="100%" alt="" />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6} sx={{textAlign:"left"}}>   
                    <p>{details.name}</p>
                    <p>{details.discount}</p>
                    <p>Rp. {details.price}</p>
                    <p>Dimension: {details.dimension}</p>
                    <p>Price Unit: {details.unit}</p>
                    <Button color='warning' sx={{ width: '50%',}} variant='contained'>
                        Buy
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProductDetail;