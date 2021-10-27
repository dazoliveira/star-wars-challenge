import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchYourPath,
  selectFetchStatus,
  selectMasterName,
  selectYourPath,
} from './jediVsDarkseidSlice';

import { Container } from './styles';
import lukeImg from './imgs/luke-skywalker.png'
import vaderImg from './imgs/darth-vader.png'

const JediVsDarkseid: React.FC = () => {

  const fetchStatus = useAppSelector(selectFetchStatus);
  const masterName = useAppSelector(selectMasterName);
  const yourPath = useAppSelector(selectYourPath);


  const dispatch = useAppDispatch();
  
  return (
    <Container>
      <div>
        GO BACK
      </div>
    
      <button onClick={() => dispatch(fetchYourPath())}>
        choose your path again, Padawan
      </button>
      <img src={yourPath === 'jedi'? lukeImg : vaderImg} alt="your_master" width="100%" height="100%">

      </img>
      <span>
        Your master is {masterName}
      </span>
   
    </Container>
  );
}

export default JediVsDarkseid
