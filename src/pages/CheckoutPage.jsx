import React from 'react';
import { Grid, Button } from "@mui/material";

export default function CheckoutPage() {
    return (
        <div style={{textAlign:"center"}}>
            <h1>Checkout Page</h1>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                padding={1}>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                    <img src={"https://via.placeholder.com/150"} width="100%" alt="" />
                </Grid>
                <Grid item lg={9} md={9} sm={9} xs={9} sx={{textAlign:"left"}}>   
                    <p>SO Klin Pewangi</p>
                    <p>1 PCS</p>
                    <p>Subtotal: 123456789</p>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                    <img src={"https://via.placeholder.com/150"} width="100%" alt="" />
                </Grid>
                <Grid item lg={9} md={9} sm={9} xs={9} sx={{textAlign:"left"}}>   
                    <p>SO Klin Pewangi</p>
                    <p>1 PCS</p>
                    <p>Subtotal: 123456789</p>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                    <img src={"https://via.placeholder.com/150"} width="100%" alt="" />
                </Grid>
                <Grid item lg={9} md={9} sm={9} xs={9} sx={{textAlign:"left"}}>   
                    <p>SO Klin Pewangi</p>
                    <p>1 PCS</p>
                    <p>Subtotal: 123456789</p>
                </Grid>
            </Grid>
            <h4>Total: 2340987</h4>
            <Button color='warning' sx={{ width: '90%'}} variant='contained'>
                Confirm
            </Button>
        </div>
    );
}