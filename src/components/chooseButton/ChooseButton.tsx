import { useRef, useEffect, useState } from "react";
import { Button, Grid, useTheme, Zoom } from "@material-ui/core";
import { useStyles } from "./styles";

export type ChooseButtonProps = {
    handleOnClick(): void
    isMobile: boolean
    variant: boolean
    text: string
    isDisabled: boolean
    yourPath: string | null
}

export default function ChooseButton({ 
  handleOnClick, 
  isMobile, 
  variant,
  text,
  isDisabled,
  yourPath
}: ChooseButtonProps) {

    const theme = useTheme();
    const ref = useRef()
    const classes = useStyles({ variant,  isMobile})

    const [ value, setValue ] = useState<string | null>('')

    useEffect(() => {
      setValue('')
      setTimeout(() => setValue(yourPath), 2000)
    }, [yourPath])

    const transitionDuration = {
      enter: 2000,
      exit: theme.transitions.duration.leavingScreen,
    };
    
    return (    
      <Grid 
        item xs={12} 
        className={classes.root}
      >
        <Zoom
          ref={ref}
          key={yourPath}
          in={!!value}
          timeout={transitionDuration}
          unmountOnExit
        >
          <Button 
            className={classes.chooseButton}
            data-testid='choose-button'
            onClick={handleOnClick}
            disabled={isDisabled} 
            variant="contained"
          >
            {text}
          </Button>
        </Zoom>
      </Grid>   
    )
}