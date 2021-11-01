import React from "react";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export type MasterAvatarProps = {
    variant: boolean
    isMobile: boolean
    avatarSrc: string
    text: string
    avatarName?: string | null
}

export default function MasterAvatar({ variant, isMobile, avatarSrc, avatarName, text }: MasterAvatarProps) {

    const classes = useStyles({ variant, isMobile })
    
    return (
        <Grid 
          container
          item
          direction='column'
          justifyContent="center"
          alignItems="center"
          xs={12}
        >          
        <Avatar 
          alt={avatarName || 'master-avatar'}
          src={avatarSrc}
          className={classes.avatar} 
        />            
        <Typography 
          variant='h3'
          component='p'
          color='secondary'
          align='center'
          className={classes.name}
        >
          {text}<span>{avatarName || '. . .'}</span>
        </Typography>
      </Grid>   
    )
}