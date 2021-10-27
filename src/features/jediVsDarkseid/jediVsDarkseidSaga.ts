import { call, put, race, takeLatest } from "@redux-saga/core/effects"
import jediVsDarkseidApi from "api/jediVsDarkseidApi"
import { fetchYourPath, fetchYourPathSuccess } from "./jediVsDarkseidSlice"


function* fetchPostsWithTimeout() {
    const {lucke, vader} = yield race({
        vader: call(jediVsDarkseidApi.getPathByMaster, {resource: '4'}),
        lucke: call(jediVsDarkseidApi.getPathByMaster, {resource: '1'}),
    })
    if (lucke){
        yield put(fetchYourPathSuccess({ masterName: lucke.name, yourPath: 'jedi' }));
    } else {
        yield put(fetchYourPathSuccess({ masterName: vader.name, yourPath: 'darkseid' }));
    }
  }

export default function* jediVsDarkseidSaga(){
    yield takeLatest(fetchYourPath.toString(), fetchPostsWithTimeout)
}