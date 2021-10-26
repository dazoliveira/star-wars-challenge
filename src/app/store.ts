import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../features/counter/counterSlice';
import jediVsDarkseidReducer from '../features/jediVsDarkseid/jediVsDarkseidSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    jediVsDarkseid: jediVsDarkseidReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
