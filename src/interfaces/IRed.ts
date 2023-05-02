import { REDES_TYPE } from '../types/redesType';
import { IRedProps } from './IBaseDatos';

export interface IRedes {
   redesRed: Array<IRedProps>;
   loadingRed: boolean;
   errorRed: string;
   successRed: string;
}

interface SetRedesActionRed {
   type: REDES_TYPE.SET_REDES;
   payload: Array<IRedProps>;
}

interface LoadingActionRed {
   type: REDES_TYPE.SET_LOADING;
   payload: boolean;
}

interface ErrorActionRed {
   type: REDES_TYPE.SET_ERROR;
   payload: string;
}

interface SuccessActionRed {
   type: REDES_TYPE.SET_SUCCESS;
   payload: string;
}

export type RedActions = SetRedesActionRed | LoadingActionRed | ErrorActionRed | SuccessActionRed;
