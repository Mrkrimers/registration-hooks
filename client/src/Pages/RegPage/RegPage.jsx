import { Typography, TextField, Button } from "@mui/material";
import style from './style.module.css';
import React, { useState } from "react";
import { Link } from "react-router-dom"

const RegPage = () => {
    const [inpData, setInpData] = useState({
        email: "",
        pwd: ""
    })

    const show = async () => {
        const jsonData = await fetch('http://localhost:3001/api/register', {
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
        <div className={style.wrapper}>
            <Typography variant="h4">Registration</Typography>

            <div>
                <TextField name="email" label="Email" variant="standard" onChange={(event) => setInpData({ ...inpData, [event.target.name]: event.target.value })} />
            </div>

            <div>
                <TextField name="pwd" label="Password" variant="standard" onChange={(event) => setInpData({ ...inpData, [event.target.name]: event.target.value })} />
            </div>

            <div>
                <TextField label="Confirm Password" variant="standard" />
            </div>

            <Button variant="outlined" onClick={show}>SING UP</Button>

            <div style={{ display: "flex" }}>
                <p>Already have an account?</p>
                <Button variant="text"> <Link to='/auth'>  SIGN IN  </Link>  </Button>
            </div>
        </div>
    )
}

export default RegPage;