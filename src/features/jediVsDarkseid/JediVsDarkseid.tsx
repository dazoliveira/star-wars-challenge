import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  chooseYourPathAsync,
  selectFetchStatus,
} from './jediVsDarkseidSlice';

import { Container } from './styles';

const darth_vader = './imgs/darth-vader.png'
const luke_skywalker = './imgs/luke-skywalker.png'

const JediVsDarkseid: React.FC = () => {
  const fetchStatus = useAppSelector(selectFetchStatus);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  
  return (
    <Container>
      <div>
        GO BACK
      </div>
    
      <button onClick={() => dispatch(chooseYourPathAsync())}>
        choose your path again, Padawan
      </button>
      <img src={darth_vader} alt="your_master" width="100%" height="100%">

      </img>
      <span>
        Your master is Luke Skywalker
      </span>
   
    </Container>
  );
}

export default JediVsDarkseid
