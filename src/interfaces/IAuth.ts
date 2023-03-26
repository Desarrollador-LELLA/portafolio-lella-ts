import { AUTH_TYPE } from '../types/authType';
import { IUsuario } from './IUsuario';

export interface IAuths {
    usuarioAuth: IUsuario | undefined;
    authenticatedAuth: boolean;
    loadingAuth: boolean;
    errorAuth: string;
    needVerificationAuth: boolean;
    successAuth: string;
}

interface SetUsuarioActionAuth {
    type: AUTH_TYPE.SET_USER;
    payload: IUsuario;
}

interface LoadingActionAuth {
    type: AUTH_TYPE.SET_LOADING;
    payload: boolean;
}

interface SingOutActionAuth {
    type: AUTH_TYPE.SIGN_OUT;
}

interface ErrorActionAuth {
    type: AUTH_TYPE.SET_ERROR;
    payload: string;
}

interface NeedVerificationActionAuth {
    type: AUTH_TYPE.NEED_VERIFICATION;
}

interface SuccessActionAuth {
    type: AUTH_TYPE.SET_SUCCESS;
    payload: string;
}

export type AuthActions = SetUsuarioActionAuth | LoadingActionAuth | SingOutActionAuth | ErrorActionAuth | NeedVerificationActionAuth | SuccessActionAuth;
