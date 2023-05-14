import { ThunkAction } from 'redux-thunk';
import { IListasPaginas, IMetodosProps, IPotafolioProps } from '../../interfaces/IBaseDatos';
import { IRetornoBackProyectos } from '../../interfaces/IRetornos';
import { consultaStandar } from '../../utilidades/metodosFirebase';
import { RootState } from '../store';
import { ProyectoActions } from '../../interfaces/IProyecto';
import { PROYECTOS_TYPE } from '../../types/proyectosType';

interface IListLimit<A> extends IMetodosProps<A> {
   numpag: number;
   registros: number;
}

export const getListProyectos = async (f: IListLimit<IRetornoBackProyectos>) => {
   try {
      f.onLoading(true);
      const retorno = await consultaStandar<IRetornoBackProyectos>({ url: `/proyectos/listar?registros=${f.registros}&num=${f.numpag}`, method: 'GET' });
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

export const setListaProyectoAction =
   (list: IListasPaginas<IPotafolioProps>): ThunkAction<void, RootState, null, ProyectoActions> =>
   (dispatch) => {
      dispatch({
         type: PROYECTOS_TYPE.SET_PROYECTOS,
         payload: list,
      });
   };

export const setLoadingProyectoAction =
   (value: boolean): ThunkAction<void, RootState, null, ProyectoActions> =>
   (dispatch) => {
      dispatch({
         type: PROYECTOS_TYPE.SET_LOADING,
         payload: value,
      });
   };

export const setErrorProyectoAction =
   (msg: string): ThunkAction<void, RootState, null, ProyectoActions> =>
   (dispatch) => {
      dispatch({
         type: PROYECTOS_TYPE.SET_ERROR,
         payload: msg,
      });
   };

export const setSuccessProyectoAction =
   (msg: string): ThunkAction<void, RootState, null, ProyectoActions> =>
   (dispatch) => {
      dispatch({
         type: PROYECTOS_TYPE.SET_SUCCESS,
         payload: msg,
      });
   };

export const setPagActualProyectoAction =
   (v: number): ThunkAction<void, RootState, null, ProyectoActions> =>
   (dispatch) => {
      dispatch({
         type: PROYECTOS_TYPE.SET_PAGACTUAL,
         payload: v,
      });
   };
