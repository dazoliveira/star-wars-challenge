import React from "react";
import { Box, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useStyles } from "./styles";

type GoBackButtonProps = {
    variant: boolean
}

export default function GoBackButton({ variant }: GoBackButtonProps) {

    const classes = useStyles({ variant })
    
    return (
        <Box className={classes.root}>
            <NavLink to='/welcome'>
                <ArrowBackIcon fontSize='inherit' color='secondary'/>
                <Typography  variant='body1' component='div'>back</Typography>
            </NavLink>   
        </Box>    
    )
}