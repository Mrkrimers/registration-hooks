import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import style from './style.module.css';
import { Link } from 'react-router-dom';

function AuthPage() {
    const [inpData, setInpData] = useState({
        email: "",
        pwd: ""
    })

    const show = async () => {
        const jsonData = await fetch('http://localhost:3001/api/authorize', {
            method: 'POST',
            body: JSON.stringify(inpData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const result = await jsonData.json();
        console.log(result);
    }

    return (

        <div div className={style.wrapper} >
            <Typography variant="h4">Authorization</Typography>

            <div>
                <TextField name="email" label="Email" variant="standard" onChange={(event) => setInpData({ ...inpData, [event.target.name]: event.target.value })} />
            </div>

            <div>
                <TextField name="pwd" label="Password" variant="standard" onChange={(event) => setInpData({ ...inpData, [event.target.name]: event.target.value })} />
            </div>

            <Button variant="outlined" onClick={show}>SING IN</Button>

            <div style={{ display: "flex" }}>
                <p>Don't have an account?</p>
                <Button variant="text">
                    <Link to='/reg'>
                        SIGN UP
                    </Link>
                </Button>
            </div>
        </div >
    )
}

export default AuthPage;