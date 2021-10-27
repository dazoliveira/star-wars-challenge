import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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

  return (
    <div className={classes.root}>
       <Box flex justifyContent='center' mt={27}>
        <Typography variant='h5'>
          Welcome to <span>IClinic</span>
        </Typography>
        <Typography>
          frontend challenge
        </Typography>
       </Box>
        <Box mt={20}>
          <Button fullWidth variant="contained" color="primary">
            Start
          </Button>
        </Box>
    </div>
  );
}
