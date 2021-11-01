import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";

type IStylesProps = {
    variant: boolean
}

export  const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        marginLeft: '52.31px',  
        paddingTop: '45.15px',
        "& a":{
          position: 'relative',
          cursor: 'pointer',
          transition: 'opacity .6s',
          '&:hover': {
            opacity: '0.8',
          },
          '& *':{
            color: ({ variant }: IStylesProps) => variant 
            ? theme.palette.secondary.contrastText
            : theme.palette.secondary.main ,
          },
          "& svg": {
            position: 'absolute',
            fontSize: '40px',
          },
          "& div": {
            position: 'absolute',
            marginLeft: '51.15px',
            marginTop: '8px'
          }
        }
      },
      // icon:{
      //   // width: '30.69px',
      //   // height: '25.69px',
      //   fontSize: '35pxpx'
      // }
  }))

