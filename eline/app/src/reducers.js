import {combineReducers} from 'redux';

import title from './ducks/title';
import role from './eline/RoleActions';

const rootReducer = combineReducers({
    title,
    role,
});

export default rootReducer;
