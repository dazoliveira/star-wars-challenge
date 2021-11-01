import { useCallback } from "react";
import { Box, Link, Typography } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useStyles } from "./styles";
import { history } from "utils";

export type GoBackLinkProps = {
    variant: boolean
    url: string
}

export default function GoBackLink({ variant, url }: GoBackLinkProps) {

    const classes = useStyles({ variant })

    const onClickHandle = useCallback(() => {
        history.push(url)
    }, [url])
    
    return (
        <Box className={classes.root}>
            <Link onClick={onClickHandle}>
                <ArrowBackIcon fontSize='inherit' color='secondary'/>
                <Typography  variant='body1' component='div'>back</Typography>
            </Link>
        </Box>    
    )
}