import { AuthActions, IAuths } from '../../interfaces/IAuth';
import { AUTH_TYPE, AUTH_NEED_VERIFICATION, AUTH_SET_ERROR, AUTH_SET_LOADING, AUTH_SET_SUCCESS, AUTH_SET_USER, AUTH_SIGN_OUT } from '../../types/authType';

const initialState: IAuths = {
    usuarioAuth: undefined,
    authenticatedAuth: false,
    loadingAuth: true,
    errorAuth: '',
    needVerificationAuth: false,
    successAuth: '',
};

const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case AUTH_SET_USER:
            return {
                ...state,
                usuarioAuth: action.payload,
                authenticatedAuth: true,
            };
        case AUTH_SET_LOADING:
            return {
                ...state,
                loadingAuth: action.payload,
            };
        case AUTH_SIGN_OUT:
            return {
                ...state,
                usuarioAuth: undefined,
                authenticatedAuth: false,
                loadingAuth: false,
            };
        case AUTH_SET_ERROR:
            return {
                ...state,
                errorAuth: action.payload,
            };
        case AUTH_NEED_VERIFICATION:
            return {
                ...state,
                needVerificationAuth: true,
            };
        case AUTH_SET_SUCCESS:
            return {
                ...state,
                successAuth: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
