import React from 'react';
import { TextField, Button } from "@mui/material";


export default function Login() {
    return (
        <div style={{padding:30, textAlign:"center"}}>
            <h1>Login</h1>
            <TextField
            autoFocus
            required
            margin="dense"
            id="username"
            label="Username"
            fullWidth
            variant="standard"
            color="warning"
            sx={{ width: '90%', marginBottom: 3}}
            // value={nickname}
            // onChange={(event) => {setNickname(event.target.value)}} 
            />
            <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            label="Password"
            fullWidth
            variant="standard"
            color="warning"
            sx={{ width: '90%', marginBottom: 3}}
            // value={nickname}
            // onChange={(event) => {setNickname(event.target.value)}} 
            />
            <Button color='warning' sx={{ width: '90%', marginBottom: 3}} variant='contained'>
                Login
            </Button>
        </div>
    );
}