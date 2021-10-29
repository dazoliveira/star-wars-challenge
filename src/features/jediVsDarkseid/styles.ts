import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";

export interface IStylesProps {
    isJedi: boolean,
    isMobile: boolean
  }
  
export  const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      height: ({ isMobile }: IStylesProps) => isMobile ? '1024px' : 'auto',
      width: '100%',
      backgroundColor: ({ isJedi }: IStylesProps) => isJedi 
        ? theme.palette.secondary.light 
        : theme.palette.secondary.contrastText,
    },
    container:{
      flexGrow: 1,
      width: '100%'
    },
    gridContainer:{
      width:'100%',
      marginTop: '129.85px'
    },
  }))