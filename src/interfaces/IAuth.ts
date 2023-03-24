import { AUTH_TYPE, AUTH_NEED_VERIFICATION, AUTH_SET_ERROR, AUTH_SET_LOADING, AUTH_SET_SUCCESS, AUTH_SET_USER, AUTH_SIGN_OUT } from '../types/authType';
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
    type: typeof AUTH_SET_USER;
    payload: IUsuario;
}

interface LoadingActionAuth {
    type: typeof AUTH_SET_LOADING;
    payload: boolean;
}

interface SingOutActionAuth {
    type: typeof AUTH_SIGN_OUT;
}

interface ErrorActionAuth {
    type: typeof AUTH_SET_ERROR;
    payload: string;
}

interface NeedVerificationActionAuth {
    type: typeof AUTH_NEED_VERIFICATION;
}

interface SuccessActionAuth {
    type: typeof AUTH_SET_SUCCESS;
    payload: string;
}

export type AuthActions = SetUsuarioActionAuth | LoadingActionAuth | SingOutActionAuth | ErrorActionAuth | NeedVerificationActionAuth | SuccessActionAuth;
