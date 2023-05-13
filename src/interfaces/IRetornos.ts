import { IHabilidadesProps, IListasPaginas, IRedProps } from './IBaseDatos';
import { IUsuario } from './IUsuario';

export interface IRetornoBack {
    mensaje: string;
    confirma: boolean;
}

export interface IRetornoBackRedes extends IRetornoBack {
    resultado: Array<IRedProps>;
}

export interface IRetornoBackHabilidades extends IRetornoBack {
    resultado: IListasPaginas<IHabilidadesProps>;
 }

export interface IRetornoBackAuth extends IRetornoBack {
    resultado: IUsuario;
}