import { Button, Grid } from "@material-ui/core";
import { useStyles } from "./styles";

export type ChooseButtonProps = {
    handleOnClick(): void
    isMobile: boolean
    variant: boolean
    text: string
    isDisabled: boolean
}

export default function ChooseButton({ 
  handleOnClick, 
  isMobile, 
  variant,
  text,
  isDisabled
}: ChooseButtonProps) {

    const classes = useStyles({ variant,  isMobile})
    
    return (    
      <Grid 
        data-testid='choose-button'
        item xs={12} 
        style={{ textAlign: 'center' }}
      >
          <Button 
            className={classes.root}
            onClick={handleOnClick}
            disabled={isDisabled} 
            variant="contained"
          >
            {text}
          </Button>
      </Grid>   
    )
}