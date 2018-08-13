import {all, fork, call, take, put} from 'redux-saga/effects';

import api from '../utils/api';

import { API_LOGIN, API_LOGOUT, apiLoginFailed, apiLoginSuccess, apiLogoutSuccess } from "../eline/ApiActions";
import { alertWarning } from "../eline/AlertActions";

export default function* apiSaga() {
    yield all([
        fork(apiLoginSaga),
        fork(apiLogoutSaga),
    ]);
}

function* apiLoginSaga() {
    while (true) {
        const {username, password} = yield take(API_LOGIN);
        let response = null;
        try {
            response = yield call(api.login, username, password);
            yield put(apiLoginSuccess(response.user, response.role))
        } catch (error) {
            yield put(apiLoginFailed())
        }

    }
}

function* apiLogoutSaga() {
    while (true) {
        yield take(API_LOGOUT);
        yield call(api.logout);
        yield put(apiLogoutSuccess());
    }
}
