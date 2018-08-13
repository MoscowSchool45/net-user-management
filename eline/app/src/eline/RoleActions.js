// Actions
export const SET_ROLE = 'ROLES/SET_ROLE';
export const SET_USER = 'ROLES/SET_USER';

// Initial state for reducer
const initialState = {
    role: 'base',
    user: null,
};

// Reducer(s)
export default function roleReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ROLE:
            return {
                ...state,
                role: action.role,
            };
        case SET_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
}

// Action creators
export const setRole = role => ({type: SET_ROLE, role});
export const setUser = user => ({type: SET_USER, user});


