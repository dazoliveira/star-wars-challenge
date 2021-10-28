import { useMemo } from 'react';
import { Box, Button, Container, Theme, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { createStyles, makeStyles } from "@material-ui/styles";
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
  
  console.log('RE-RENDER')

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <NavLink to='/welcome'>
          <ArrowBackIcon color='secondary'/>
          <Typography  variant='body1' component='div'>back</Typography>
        </NavLink>   
      </Box>
      <Container maxWidth="sm">
        <Button onClick={() => dispatch(fetchYourPath())} disabled={fetchStatus === 'loading'}>
          choose your path again, Padawan
        </Button>
        <img src={yourPath === 'jedi'? lukeImg : vaderImg} alt="your_master" width="100%" height="100%">

        </img>
        <span>
          Your master is {masterName}
        </span>
      </Container>
    </div>
  );
}

export default JediVsDarkseid
