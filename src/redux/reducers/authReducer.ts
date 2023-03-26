import { AuthActions, IAuths } from '../../interfaces/IAuth';
import { AUTH_TYPE } from '../../types/authType';

const initialState: IAuths = {
    usuarioAuth: undefined,
    authenticatedAuth: false,
    loadingAuth: false,
    errorAuth: '',
    needVerificationAuth: false,
    successAuth: '',
};

const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case AUTH_TYPE.SET_USER:
            return {
                ...state,
                usuarioAuth: action.payload,
                authenticatedAuth: true,
            };
        case AUTH_TYPE.SET_LOADING:
            return {
                ...state,
                loadingAuth: action.payload,
            };
        case AUTH_TYPE.SIGN_OUT:
            return {
                ...state,
                usuarioAuth: {  },
                authenticatedAuth: false,
                loadingAuth: false,
            };
        case AUTH_TYPE.SET_ERROR:
            return {
                ...state,
                errorAuth: action.payload,
            };
        case AUTH_TYPE.NEED_VERIFICATION:
            return {
                ...state,
                needVerificationAuth: true,
            };
        case AUTH_TYPE.SET_SUCCESS:
            return {
                ...state,
                successAuth: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
