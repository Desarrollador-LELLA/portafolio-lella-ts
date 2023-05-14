import { ThunkAction } from 'redux-thunk/es/types';
import { IMetodosProps, IRedProps } from '../../interfaces/IBaseDatos';
import { IRetornoBackRedes } from '../../interfaces/IRetornos';
import { consultaStandar } from '../../utilidades/metodosFirebase';
import { RootState } from '../store';
import { RedActions } from '../../interfaces/IRed';
import { REDES_TYPE } from '../../types/redesType';

export const getListRedes = async (f: IMetodosProps<IRetornoBackRedes>) => {
   try {
      f.onLoading(true);
      const retorno = await consultaStandar<IRetornoBackRedes>({ url: '/redes/listar', method: 'GET' });
      if (retorno.confirma) {
         f.onSuccess(retorno);
      } else {
         f.onError(retorno.mensaje);
      }
      f.onLoading(false);
   } catch (err: any) {
      f.onError(err.message);
      f.onLoading(false);
   }
};

export const setListaRedAction =
   (list: Array<IRedProps>): ThunkAction<void, RootState, null, RedActions> =>
   (dispatch) => {
      dispatch({
         type: REDES_TYPE.SET_REDES,
         payload: list,
      });
   };

export const setLoadingRedAction =
   (value: boolean): ThunkAction<void, RootState, null, RedActions> =>
   (dispatch) => {
      dispatch({
         type: REDES_TYPE.SET_LOADING,
         payload: value,
      });
   };

export const setErrorRedAction =
   (msg: string): ThunkAction<void, RootState, null, RedActions> =>
   (dispatch) => {
      dispatch({
         type: REDES_TYPE.SET_ERROR,
         payload: msg,
      });
   };

export const setSuccessRedAction =
   (msg: string): ThunkAction<void, RootState, null, RedActions> =>
   (dispatch) => {
      dispatch({
         type: REDES_TYPE.SET_SUCCESS,
         payload: msg,
      });
   };
