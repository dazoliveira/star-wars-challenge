import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchYourPath,
  selectFetchStatus,
  selectMasterName,
  selectYourPath,
} from './jediVsDarkseidSlice';

import lukeImg from './imgs/luke-skywalker.png'
import vaderImg from './imgs/darth-vader.png'
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const JediVsDarkseid: React.FC = () => {

  const fetchStatus = useAppSelector(selectFetchStatus);
  const masterName = useAppSelector(selectMasterName);
  const yourPath = useAppSelector(selectYourPath);


  const dispatch = useAppDispatch();
  
  console.log('RE-RENDER')

  return (
    <>
      <NavLink to='/welcome'>

      <div>
        GO BACK
      </div>
      </NavLink>
    
      <Button onClick={() => dispatch(fetchYourPath())} disabled={fetchStatus === 'loading'}>
        choose your path again, Padawan
      </Button>
      <img src={yourPath === 'jedi'? lukeImg : vaderImg} alt="your_master" width="100%" height="100%">

      </img>
      <span>
        Your master is {masterName}
      </span>
    </>
  );
}

export default JediVsDarkseid
