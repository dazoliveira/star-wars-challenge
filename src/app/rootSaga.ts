import jediVsDarkseidSaga from 'features/jediVsDarkseid/jediVsDarkseidSaga'
import { all } from 'redux-saga/effects'

export default function* rootSaga(){
  yield all([ jediVsDarkseidSaga() ])
}