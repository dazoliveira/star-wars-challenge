import { call, put, race, takeLatest } from "@redux-saga/core/effects"
import jediVsDarkseidApi from "api/jediVsDarkseidApi"
import { push } from "connected-react-router";
import { clean, fetchYourPath, fetchYourPathSuccess } from "./jediVsDarkseidSlice"


export function* fetchWinnerPath() {
    try {
        const {lucke, vader} = yield race({
            vader: call(jediVsDarkseidApi.getPathByMaster, {resource: '4'}),
            lucke: call(jediVsDarkseidApi.getPathByMaster, {resource: '1'}),
        })
        if (lucke){
            yield put(fetchYourPathSuccess({ masterName: lucke.name, yourPath: 'jedi' }));
        } else {
            yield put(fetchYourPathSuccess({ masterName: vader.name, yourPath: 'darkseid' }));
        }
        yield put(push('/jedi-vs-darkside'))
    } catch (error) {
        yield put(clean());
    }
  }

 
export function* pushWelcomePage() {
    yield put(push('/welcome'))
  } 
  

export default function* jediVsDarkseidSaga(){
    yield takeLatest(fetchYourPath.toString(), fetchWinnerPath)
    yield takeLatest(clean.toString(), pushWelcomePage)
}