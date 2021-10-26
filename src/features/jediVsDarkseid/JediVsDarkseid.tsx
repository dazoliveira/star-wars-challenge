import jadiVsDarkseidApi from '../../api/jadiVsDarkseidApi'
import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchYourPath,
  selectFetchStatus,
} from './jediVsDarkseidSlice';

import { Container } from './styles';
import lukeImg from './imgs/luke-skywalker.png'
import vaderImg from './imgs/luke-skywalker.png'

const darth_vader = './imgs/darth-vader.png'
const luke_skywalker = './imgs/luke-skywalker.png'

const JediVsDarkseid: React.FC = () => {

  const fetchStatus = useAppSelector(selectFetchStatus);
  const dispatch = useAppDispatch();
  
  return (
    <Container>
      <div>
        GO BACK
      </div>
    
      <button onClick={() => dispatch(fetchYourPath())}>
        choose your path again, Padawan
      </button>
      <img src={lukeImg} alt="your_master" width="100%" height="100%">

      </img>
      <span>
        Your master is Luke Skywalker
      </span>
   
    </Container>
  );
}

export default JediVsDarkseid
