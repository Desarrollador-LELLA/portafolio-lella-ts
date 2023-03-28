import { IUsuario } from './IUsuario';

export interface IRetornoBack {
    mensaje: string;
    resultado: IUsuario;
    confirma: boolean;
}
