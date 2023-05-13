import { ThunkAction } from 'redux-thunk';
import { IHabilidadesProps, IListasPaginas, IMetodosProps } from '../../interfaces/IBaseDatos';
import { RootState } from '../store';
import { HabilidadActions } from '../../interfaces/IHabilidad';
import { HABILIDADES_TYPE } from '../../types/habilidadesType';
import { consultaStandar } from '../../utilidades/metodosFirebase';
import { IRetornoBackHabilidades } from '../../interfaces/IRetornos';

interface IListLimit<A> extends IMetodosProps<A> {
   numpag: number;
   registros: number;
}

export const getListHabilidades = async (f: IListLimit<IRetornoBackHabilidades>) => {
   try {
      f.onLoading(true);
      const retorno = await consultaStandar<IRetornoBackHabilidades>({ url: `/redes/listar?registros=${f.registros}&num=${f.numpag}`, method: 'GET' });
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

export const setListaHabilidadAction =
   (list: IListasPaginas<IHabilidadesProps>): ThunkAction<void, RootState, null, HabilidadActions> =>
   (dispatch) => {
      dispatch({
         type: HABILIDADES_TYPE.SET_HABILIDADES,
         payload: list,
      });
   };

export const setLoadingHabilidadAction =
   (value: boolean): ThunkAction<void, RootState, null, HabilidadActions> =>
   (dispatch) => {
      dispatch({
         type: HABILIDADES_TYPE.SET_LOADING,
         payload: value,
      });
   };

export const setErrorHabilidadAction =
   (msg: string): ThunkAction<void, RootState, null, HabilidadActions> =>
   (dispatch) => {
      dispatch({
         type: HABILIDADES_TYPE.SET_ERROR,
         payload: msg,
      });
   };

export const setSuccessHabilidadAction =
   (msg: string): ThunkAction<void, RootState, null, HabilidadActions> =>
   (dispatch) => {
      dispatch({
         type: HABILIDADES_TYPE.SET_SUCCESS,
         payload: msg,
      });
   };

export const setPagActualHabilidadAction =
   (v: number): ThunkAction<void, RootState, null, HabilidadActions> =>
   (dispatch) => {
      dispatch({
         type: HABILIDADES_TYPE.SET_PAGACTUAL,
         payload: v,
      });
   };
