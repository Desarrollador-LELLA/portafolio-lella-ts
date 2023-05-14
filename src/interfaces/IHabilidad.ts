import { HABILIDADES_TYPE } from '../types/habilidadesType';
import { IHabilidadesProps, IListaPagActual, IListasPaginas } from './IBaseDatos';

export interface IHabilidades {
   habilidadesHabilidad: IListaPagActual<IHabilidadesProps>;
   loadingHabilidad: boolean;
   errorHabilidad: string;
   successHabilidad: string;
}

interface SetHabilidadesActionHabilidad {
   type: HABILIDADES_TYPE.SET_HABILIDADES;
   payload: IListasPaginas<IHabilidadesProps>;
}

interface LoadingActionHabilidad {
   type: HABILIDADES_TYPE.SET_LOADING;
   payload: boolean;
}

interface ErrorActionHabilidad {
   type: HABILIDADES_TYPE.SET_ERROR;
   payload: string;
}

interface SuccessActionHabilidad {
   type: HABILIDADES_TYPE.SET_SUCCESS;
   payload: string;
}

interface SetPagActualActionHabilidad {
   type: HABILIDADES_TYPE.SET_PAGACTUAL;
   payload: number;
}

export type HabilidadActions = SetHabilidadesActionHabilidad | LoadingActionHabilidad | ErrorActionHabilidad | SuccessActionHabilidad | SetPagActualActionHabilidad;
