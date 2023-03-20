import { AUTHTYPE } from '../types/authType';
import { IUsuario } from './IUsuario';

export interface IAuth {
    usuarioAuth: IUsuario | undefined;
    authenticatedAuth: boolean;
    loadingAuth: boolean;
    errorAuth: string;
    needVerificationAuth: boolean;
    successAuth: string;
}

interface SetUsuarioActionAuth {
    type: AUTHTYPE.SET_USER;
    payload: IUsuario;
}

interface LoadingActionAuth {
    type: AUTHTYPE.SET_LOADING;
    payload: boolean;
}

interface SingOutActionAuth {
    type: AUTHTYPE.SIGN_OUT;
}

interface ErrorActionAuth {
    type: AUTHTYPE.SET_ERROR;
    payload: string;
}

interface NeedVerificationActionAuth {
    type: AUTHTYPE.NEED_VERIFICATION;
}

interface SuccessActionAuth {
    type: AUTHTYPE.SET_SUCCESS;
    payload: string;
}

export type AuthActions = SetUsuarioActionAuth | LoadingActionAuth | SingOutActionAuth | ErrorActionAuth | NeedVerificationActionAuth | SuccessActionAuth;
