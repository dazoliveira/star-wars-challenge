import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";

type IStylesProps = {
    variant: boolean,
    isMobile: boolean
}

export  const useStyles = makeStyles((theme: Theme) => createStyles({
  avatar: {
    width: theme.spacing(63),
    height: theme.spacing(63),
    marginBottom: ({ isMobile }: IStylesProps) => isMobile ? '19.69px' : '0',
    marginTop: ({ isMobile }: IStylesProps) => isMobile ? '19.85px' : '0',
  },
  name: {
    width: '100%',
    display: 'flex',
    flexDirection: ({ isMobile }: IStylesProps) => isMobile ? 'column' : 'row',
    height: '103px',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    marginBottom: ({ isMobile }: IStylesProps) => isMobile ? 'auto' : '201px',
    color: ({ variant }: IStylesProps) => variant 
    ? theme.palette.secondary.contrastText
    : theme.palette.secondary.main,
    '& span': {
      fontWeight: 700,
      marginLeft: '0.625rem'
    }
  }
  }))

