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

export interface TypeAuth {
    type: AUTHTYPE;
}
