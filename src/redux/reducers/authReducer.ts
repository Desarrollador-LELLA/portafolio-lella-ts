import { AuthActions, IAuth } from '../../interfaces/IAuth';
import { AUTHTYPE } from '../../types/authType';

const initialState: IAuth = {
    usuarioAuth: undefined,
    authenticatedAuth: false,
    loadingAuth: true,
    errorAuth: '',
    needVerificationAuth: false,
    successAuth: '',
};

const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case AUTHTYPE.SET_USER:
            return {
                ...state,
                usuarioAuth: action.payload,
                authenticatedAuth: true,
            };
        case AUTHTYPE.SET_LOADING:
            return {
                ...state,
                loadingAuth: action.payload,
            };
        case AUTHTYPE.SIGN_OUT:
            return {
                ...state,
                usuarioAuth: undefined,
                authenticatedAuth: false,
                loadingAuth: false,
            };
        case AUTHTYPE.SET_ERROR:
            return {
                ...state,
                errorAuth: action.payload,
            };
        case AUTHTYPE.NEED_VERIFICATION:
            return {
                ...state,
                needVerificationAuth: true,
            };
        case AUTHTYPE.SET_SUCCESS:
            return {
                ...state,
                successAuth: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
