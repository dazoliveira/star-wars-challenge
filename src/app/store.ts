import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import counterReducer from '../features/counter/counterSlice';
import jediVsDarkseidReducer from '../features/jediVsDarkseid/jediVsDarkseidSlice';
import rootSaga from './rootSaga';

const rootReducer = combineReducers({
  jediVsDarkseid: jediVsDarkseidReducer,
  counter: counterReducer
})

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
