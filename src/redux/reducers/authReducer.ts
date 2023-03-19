import { IAuth } from '../../interfaces/IAuth';
import { AUTHTYPE } from '../../types/authType';

const initialState: IAuth = {
    usuarioAuth: undefined,
    authenticatedAuth: false,
    loadingAuth: true,
    errorAuth: '',
    needVerificationAuth: false,
    successAuth: '',
};

const authReducer = (state = initialState, action: AUTHTYPE) => {
    switch (action) {
        case AUTHTYPE.SET_USER:
            return {};
        default:
            return state;
    }
};

export default authReducer;
