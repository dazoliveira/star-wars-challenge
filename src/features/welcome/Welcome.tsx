import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { fetchYourPath, selectFetchStatus } from "features/jediVsDarkseid/jediVsDarkseidSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '100vh'
  }
}))

export default function Welcome() {

  const classes = useStyles()
  const dispatch = useAppDispatch()

  const fetchStatus = useAppSelector(selectFetchStatus);


  return (
    <div className={classes.root}>
       <Box justifyContent='center' mt={27}>
        <Typography variant='h5'>
          Welcome to <span>IClinic</span>
        </Typography>
        <Typography>
          frontend challenge
        </Typography>
       </Box>
        <Box mt={20}>
          <Button disabled={fetchStatus === 'loading'} fullWidth variant="contained" color="primary" onClick={() => dispatch(fetchYourPath())}>
            Start
          </Button>
        </Box>
    </div>
  );
}
