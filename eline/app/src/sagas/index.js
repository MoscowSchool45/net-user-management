import {all, call, fork} from 'redux-saga/effects';

import apiSaga from './apiSaga'
import loginSaga from './loginSaga'

export default function* rootSaga(searchWithRedirect = true) {
    yield all([
        fork(apiSaga),
        fork(loginSaga),
    ]);
}
