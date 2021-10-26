import { call, put, race, takeLatest } from "@redux-saga/core/effects"
import jadiVsDarkseidApi from "api/jadiVsDarkseidApi"
import { fetchYourPath, fetchYourPathSuccess } from "./jediVsDarkseidSlice"


function* fetchPostsWithTimeout() {
    const {lucke, vader} = yield race({
      lucke: call(jadiVsDarkseidApi.getPathByMaster, {resource: '1'}),
      vader: call(jadiVsDarkseidApi.getPathByMaster, {resource: '4'}),
    })
    if (lucke)
        yield put(fetchYourPathSuccess(lucke.name));
    else
        yield put(fetchYourPathSuccess(vader.name));
  }

export default function* jediVsDarkseidSaga(){
    yield takeLatest(fetchYourPath.toString(), fetchPostsWithTimeout)
}