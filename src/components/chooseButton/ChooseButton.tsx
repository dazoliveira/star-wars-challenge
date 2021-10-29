import { Button, Grid } from "@material-ui/core";
import { selectFetchStatus } from "features/jediVsDarkseid/jediVsDarkseidSlice";
import { useAppSelector } from "app/hooks";
import { useStyles } from "./styles";

type ChooseButtonProps = {
    handleOnClick(): void
    isMobile: boolean
    variant: boolean
    text: string
}

export default function ChooseButton({ 
  handleOnClick, 
  isMobile, 
  variant,
  text 
}: ChooseButtonProps) {

    const fetchStatus = useAppSelector(selectFetchStatus);

    const classes = useStyles({ variant,  isMobile})
    
    return (    
      <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button 
            className={classes.root}
            onClick={handleOnClick}
            disabled={fetchStatus === 'loading'} 
            variant="contained"
          >
            {text}
          </Button>
      </Grid>   
    )
}