import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";

type IStylesProps = {
    variant: boolean,
    isMobile: boolean
}

export  const useStyles = makeStyles((theme: Theme) => createStyles({
      root: {
        width: '347px',
        height: '56px',
        position: 'relative',
        marginBottom: 72 + theme.spacing(2) + 56,
        marginTop: ({ isMobile }: IStylesProps) => isMobile ? '36px' : '0',
      },
      chooseButton: {
        position: 'absolute',
        width: '100%',
        backgroundColor: ({ variant }: IStylesProps) => variant 
        ? theme.palette.secondary.contrastText
        : theme.palette.secondary.main,
        transition: 'opacity .6s',
        '&:hover, &:disabled': {
          opacity: '0.8',
          backgroundColor: ({ variant }: IStylesProps) => variant 
          ? theme.palette.secondary.contrastText
          : theme.palette.secondary.main,
        },
        '&:disabled': {
          opacity: '0.5',
        },
        '& span':{
          textTransform: 'none',
          fontSize: '16px',
          fontWeight: '700',
          color: ({ variant }: IStylesProps) => variant 
          ? theme.palette.secondary.light
          : theme.palette.secondary.contrastText,
        }
      },
  }))

