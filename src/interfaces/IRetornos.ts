import { IHabilidadesProps, IListasPaginas, IPotafolioProps, IRedProps } from './IBaseDatos';
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

export interface IRetornoBackProyecto extends IRetornoBack {
   resultado: IPotafolioProps;
}

export interface IRetornoBackProyectos extends IRetornoBack {
   resultado: IListasPaginas<IPotafolioProps>;
}

export interface IRetornoBackAuth extends IRetornoBack {
   resultado: IUsuario;
}
