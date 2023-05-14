import { PROYECTOS_TYPE } from '../types/proyectosType';
import { IListaPagActual, IListasPaginas, IPotafolioProps } from './IBaseDatos';

export interface IProyectos {
   proyectosProyecto: IListaPagActual<IPotafolioProps>;
   loadingProyecto: boolean;
   errorProyecto: string;
   successProyecto: string;
}

interface SetProyectosActionProyecto {
   type: PROYECTOS_TYPE.SET_PROYECTOS;
   payload: IListasPaginas<IPotafolioProps>;
}

interface LoadingActionProyecto {
   type: PROYECTOS_TYPE.SET_LOADING;
   payload: boolean;
}

interface ErrorActionProyecto {
   type: PROYECTOS_TYPE.SET_ERROR;
   payload: string;
}

interface SuccessActionProyecto {
   type: PROYECTOS_TYPE.SET_SUCCESS;
   payload: string;
}

interface SetPagActualActionProyecto {
   type: PROYECTOS_TYPE.SET_PAGACTUAL;
   payload: number;
}

export type ProyectoActions = SetProyectosActionProyecto | LoadingActionProyecto | ErrorActionProyecto | SuccessActionProyecto | SetPagActualActionProyecto;
