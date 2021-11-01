import { useMemo } from 'react';
import { Container, Grid, useMediaQuery } from '@material-ui/core';

import {
  fetchYourPath,
  selectFetchStatus,
  selectMasterName,
  selectYourPath,
} from './jediVsDarkseidSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import lukeImg from './imgs/luke-skywalker.png'
import vaderImg from './imgs/darth-vader.png'
import GoBackLink from 'components/goBackLink/GoBackLink';

import { useStyles } from './styles';
import ChooseButton from 'components/chooseButton/ChooseButton';
import MasterAvatar from 'components/masterAvatar/MasterAvatar';

const JediVsDarkseid = () => {
  
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery('(max-width:800px)');
  const yourPath = useAppSelector(selectYourPath);
  const masterName = useAppSelector(selectMasterName)
  const fetchStatus = useAppSelector(selectFetchStatus)
  const isJedi = useMemo(() => {
    return yourPath === 'jedi'
  },[yourPath] )
  
  const classes = useStyles({ isJedi, isMobile })

  return (
    <div className={classes.root}>
      <GoBackLink variant={isJedi} url='/welcome' />
      <Container className={classes.container} maxWidth="sm">
        <Grid
          className={classes.gridContainer}
          container
          direction={isMobile ? "column-reverse" : "column" }
          justifyContent="center"
          alignItems="center"
        >
          <ChooseButton  
            variant={isJedi} 
            isMobile={isMobile} 
            text='choose your path again, Padawan'
            handleOnClick={() => dispatch(fetchYourPath())}
            isDisabled={fetchStatus === 'loading'}
          />
          <MasterAvatar 
            avatarSrc={isJedi ? lukeImg : vaderImg} 
            variant={isJedi} 
            isMobile={isMobile} 
            text='Your master is'
            avatarName={masterName}
          />
        </Grid>
      </Container>
    </div>
  );
}

export default JediVsDarkseid
