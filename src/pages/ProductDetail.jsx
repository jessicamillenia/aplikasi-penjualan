import React from 'react';
import { Grid, Button } from "@mui/material";

export default function ProductDetail() {
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
                    <img src={"https://via.placeholder.com/150"} width="100%" alt="" />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6} sx={{textAlign:"left"}}>   
                    <p>SO Klin Pewangi</p>
                    <p>Rp coret</p>
                    <p>Rp asli</p>
                    <p>Dimension:</p>
                    <p>Price Unit:</p>
                    <Button color='warning' sx={{ width: '50%',}} variant='contained'>
                        Buy
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}