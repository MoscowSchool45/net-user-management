import { take, all, put } from 'redux-saga/effects';

import { API_LOGIN_FAILED, API_LOGIN_SUCCESS, API_LOGOUT_SUCCESS } from "../eline/ApiActions";
import { setRole, setUser } from '../eline/RoleActions';

export default function* loginSaga() {
    while (true) {
        const action = yield take([API_LOGIN_FAILED, API_LOGIN_SUCCESS, API_LOGOUT_SUCCESS] );
        if (action.type === API_LOGIN_SUCCESS) {
            yield all([
                put(setRole(action.role)),
                put(setUser(action.user))
            ])
        } else if (action.type === API_LOGOUT_SUCCESS) {
            yield all([
                put(setRole('base')),
                put(setUser(null))
            ])
        }
    }
}
