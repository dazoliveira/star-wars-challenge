import { Box, Button, Grid, Theme, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { fetchYourPath, selectFetchStatus } from "features/jediVsDarkseid/jediVsDarkseidSlice";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    minWidth: '688px',
    flexDirection: 'column',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '100vh',
    marginTop: '210px',
    '& .MuiTypography-gutterBottom': {
      marginBottom: theme.spacing(1) + 1
    }
  },
  buttonBox: {
    width: '189px',
  },
  startButton: {
    '& .MuiButton-label': {
      fontWeight: '700',
      lineHeight: '21.94px', 
      fontSize: '18px'
    }
  },
  startButtonLabel:{
    
  }
}))

export default function Welcome() {

  const classes = useStyles()
  const dispatch = useAppDispatch()

  const fetchStatus = useAppSelector(selectFetchStatus);

  return (
    <div className={classes.root}>
        <Grid 
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography variant='h2' color='primary' align='center' gutterBottom>
              Welcome to <Typography variant='h1' component='span'>IClinic</Typography>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color='primary' variant='subtitle2' align='center'>
              frontend challenge
            </Typography>
          </Grid>

        </Grid>
        <Box className={classes.buttonBox} mt={27}>
          <Button className={classes.startButton} disabled={fetchStatus === 'loading'} fullWidth variant="contained" color="primary" onClick={() => dispatch(fetchYourPath())}>
            S T A R T
          </Button>
        </Box>
    </div>
  );
}
