import { BaseSyntheticEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Pagination } from 'react-bootstrap';
import { setPagActualHabilidadAction } from '../../../redux/actions/habilidadesAction';
import { paginacion } from '../../../utilidades/customHook';
import { ThunkDispatch } from 'redux-thunk';
import { HabilidadActions } from '../../../interfaces/IHabilidad';

const Paginado: FC = () => {
   const { listpags, paga } = useSelector((state: RootState) => state.habilidad.habilidadesHabilidad);
   const dispatch = useDispatch<ThunkDispatch<RootState, null, HabilidadActions>>();
   const { p1, p3, p4, p5, p7, v2, v3, v4, v5, v6, v7 } = paginacion(listpags.pags, paga);

   const nextPagina = () => {
      if (paga + 1 > listpags.pags) return;
      dispatch(setPagActualHabilidadAction(paga + 1));
   };

   const prevPagina = () => {
      if (paga - 1 < 1) return;
      dispatch(setPagActualHabilidadAction(paga - 1));
   };

   const selecPagina = (e: BaseSyntheticEvent) => {
      const nom = e.target.innerText;
      dispatch(setPagActualHabilidadAction(parseInt(nom)));
   };

   return (
      <>
         <Pagination className='justify-content-center'>
            <Pagination.Prev onClick={prevPagina} />
            <Pagination.Item onClick={selecPagina} active={p1 === paga && true}>
               {p1}
            </Pagination.Item>
            <Pagination.Ellipsis hidden={v2} />
            <Pagination.Item onClick={selecPagina} hidden={v3} active={p3 === paga && true}>
               {p3}
            </Pagination.Item>
            <Pagination.Item onClick={selecPagina} hidden={v4} active={p4 === paga && true}>
               {p4}
            </Pagination.Item>
            <Pagination.Item onClick={selecPagina} hidden={v5} active={p5 === paga && true}>
               {p5}
            </Pagination.Item>
            <Pagination.Ellipsis hidden={v6} />
            <Pagination.Item onClick={selecPagina} hidden={v7} active={p7 === paga && true}>
               {p7}
            </Pagination.Item>
            <Pagination.Next onClick={nextPagina} />
         </Pagination>
      </>
   );
};

export default Paginado;
