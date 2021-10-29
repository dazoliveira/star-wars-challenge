import { Box, Button } from "@material-ui/core";

import { useAppDispatch, useAppSelector } from "app/hooks";
import BrandTitle from "components/brandTitle/BrandTitle";
import { fetchYourPath, selectFetchStatus } from "features/jediVsDarkseid/jediVsDarkseidSlice";
import { useStyles } from "./styles";

export default function Welcome() {

  const classes = useStyles()
  const dispatch = useAppDispatch()

  const fetchStatus = useAppSelector(selectFetchStatus);

  return (
    <div className={classes.root}>
        <BrandTitle 
          brandName='iClinic'
          subTitle='frontend challenge'
          welcomeText='Welcome to'
        />
        <Box className={classes.buttonBox} mt={27}>
          <Button 
            className={classes.startButton}
            disabled={fetchStatus === 'loading'} 
            fullWidth 
            variant="contained" 
            color="primary" 
            onClick={() => dispatch(fetchYourPath())}
          >
            S T A R T
          </Button>
        </Box>
    </div>
  );
}
