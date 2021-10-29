import React from "react";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import { useStyles } from "./styles";

type MasterAvatarProps = {
    variant: boolean
    isMobile: boolean
    avatarSrc: string
    text: string
    nameSelector(state: RootState): string | null
}

export default function MasterAvatar({ variant, isMobile, avatarSrc, nameSelector, text }: MasterAvatarProps) {

    const name = useAppSelector(nameSelector);
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
          alt="Your Master"
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
          {text}<span>{name || '. . .'}</span>
        </Typography>
      </Grid>   
    )
}