import { IRedProps } from './IBaseDatos';
import { IUsuario } from './IUsuario';

export interface IRetornoBack {
    mensaje: string;
    confirma: boolean;
}

export interface IRetornoBackRedes extends IRetornoBack {
    resultado: Array<IRedProps>;
}

export interface IRetornoBackAuth extends IRetornoBack {
    resultado: IUsuario;
}