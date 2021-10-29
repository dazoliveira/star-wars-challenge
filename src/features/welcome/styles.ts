import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme: Theme) => createStyles({
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
}))