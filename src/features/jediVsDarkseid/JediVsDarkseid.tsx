import { useMemo, useEffect } from 'react';
import { Box, Button, Container, Theme, Typography, Grid, Avatar } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { createStyles, makeStyles, withStyles } from "@material-ui/styles";
import { NavLink } from 'react-router-dom';
import {
  fetchYourPath,
  selectFetchStatus,
  selectMasterName,
  selectYourPath,
} from './jediVsDarkseidSlice';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import lukeImg from './imgs/luke-skywalker.png'
import vaderImg from './imgs/darth-vader.png'

interface IStylesProps {
  props: {
    isJedi: boolean
  }
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    height: '100vh',
    width: '100%',
    backgroundColor: ({ props }: IStylesProps) => props.isJedi 
      ? theme.palette.secondary.light 
      : theme.palette.secondary.contrastText,
  },
  box: {
    marginLeft: '52.31px',
    paddingTop: '45.15px',
    "& a":{
      position: 'relative',
      '& *':{
        color: ({ props }: IStylesProps) => props.isJedi 
        ? theme.palette.secondary.contrastText
        : theme.palette.secondary.main ,
      },
      "& svg": {
        position: 'absolute',
      },
      "& div": {
        position: 'absolute',
        marginLeft: '30px'
      }
    }
  },
  container:{
    flexGrow: 1,
    width: '100%'
  },
  gridContainer:{
    width:'100%',
    marginTop: '71.85px'
  },
  pathButton: {
    width: '347px',
    marginBottom: '72px',
    backgroundColor: ({ props }: IStylesProps) => props.isJedi 
    ? theme.palette.secondary.contrastText
    : theme.palette.secondary.main,
    '&:hover, &:disabled': {
      opacity: '0.9',
      backgroundColor: ({ props }: IStylesProps) => props.isJedi 
      ? theme.palette.secondary.contrastText
      : theme.palette.secondary.main,
    },
    '&:disabled': {
      opacity: '0.6',
    },
    '& span':{
      textTransform: 'lowercase',
      fontSize: '16px',
      fontWeight: '700',
      color: ({ props }: IStylesProps) => props.isJedi 
      ? theme.palette.secondary.light
      : theme.palette.secondary.contrastText,
    }
  },
  avatar:{
    width: theme.spacing(60),
    height: theme.spacing(60),
  },
  masterName: {
    width: '100%',
    display: 'flex',
    height: '103px',
    justifyContent: 'center',
    alignItems: 'center',
    color: ({ props }: IStylesProps) => props.isJedi 
    ? theme.palette.secondary.contrastText
    : theme.palette.secondary.main,
    '& span': {
      fontWeight: 700,
      marginLeft: '0.625rem'
    }
  }
}))

const JediVsDarkseid = () => {

  const fetchStatus = useAppSelector(selectFetchStatus);
  const masterName = useAppSelector(selectMasterName);
  const yourPath = useAppSelector(selectYourPath);

  const isJedi = useMemo(() => {
    return yourPath === 'jedi'
  },[yourPath] )
   
  const classes = useStyles({ props: { isJedi } })

  const dispatch = useAppDispatch();
  
  // useEffect(() => {
  //   return () => {
  //     dispatch()
  //   }
  // },[])

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <NavLink to='/welcome'>
          <ArrowBackIcon color='secondary'/>
          <Typography  variant='body1' component='div'>back</Typography>
        </NavLink>   
      </Box>
      <Container className={classes.container} maxWidth="sm">
        <Grid
          className={classes.gridContainer}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button 
              className={classes.pathButton}
              onClick={() => dispatch(fetchYourPath())}
              disabled={fetchStatus === 'loading'} 
              variant="contained"
            >
              choose your path again, Padawan
            </Button>
          </Grid>  
          <Grid container
          item
          direction='column'
          justifyContent="center"
          alignItems="center"
          xs={12}
          >          
            <Avatar alt="Remy Sharp" src={isJedi ? lukeImg : vaderImg} className={classes.avatar} />
            <Typography 
              variant='h3'
              component='p'
              color='secondary'
              align='center'
              className={classes.masterName}
            >
              Your master is<span>{masterName || '. . .'}</span>
            </Typography>
          </Grid>  
        </Grid>
      </Container>
    </div>
  );
}

export default JediVsDarkseid
