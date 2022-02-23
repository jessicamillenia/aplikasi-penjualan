import React, { Fragment } from 'react';
import { Grid, Button } from "@mui/material";



export default function ProductList() {
    return (
        <Fragment>
            <h1>Product List</h1>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                padding={3}>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                    <img src={"https://via.placeholder.com/150"} width="100%" alt="" />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>   
                    <p>SO Klin Pewangi</p>
                    <p>Rp coret</p>
                    <p>Rp asli</p>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>   
                    <Button color='warning' sx={{ width: '90%', marginBottom: 3}} variant='contained'>
                        Buy
                    </Button>
                </Grid>
            </Grid>
        </Fragment>
    );
}