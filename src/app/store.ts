import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import jediVsDarkseidReducer from 'features/jediVsDarkseid/jediVsDarkseidSlice';
import rootSaga from './rootSaga';
import { history } from 'utils';

const rootReducer = combineReducers({
  jediVsDarkseid: jediVsDarkseidReducer,
  router: connectRouter(history)
})

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
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
