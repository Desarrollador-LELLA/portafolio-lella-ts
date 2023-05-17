import { FC, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import s from './portafolio.module.css';
import CardPotafolio from '../../comp/card_portafolio/CardPotafolio';
import { RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { ProyectoActions } from '../../../interfaces/IProyecto';
import { ThunkDispatch } from 'redux-thunk';
import { getListProyectos, setErrorProyectoAction, setListaProyectoAction, setLoadingProyectoAction, setPagActualProyectoAction } from '../../../redux/actions/proyectosAction';
import Paginado from '../../comp/paginado/Paginado';
import Loading from '../../comp/loading/Loading';

interface IPortafolioProps {}

const Portafolio: FC<IPortafolioProps> = () => {
   const { loadingProyecto, proyectosProyecto } = useSelector((state: RootState) => state.proyecto);
   const dispatch = useDispatch<ThunkDispatch<RootState, null, ProyectoActions>>();

   useEffect(() => {
      const onUseEffect = () => {
         if (proyectosProyecto.listpags.items.length === 0) {
            getListProyectos({
               numpag: proyectosProyecto.paga,
               registros: 10,
               onLoading: (v) => {
                  dispatch(setLoadingProyectoAction(v));
               },
               onError: (msg) => {
                  console.log(msg);
                  dispatch(setErrorProyectoAction(msg));
               },
               onSuccess: (msg) => {
                  dispatch(setListaProyectoAction(msg.resultado));
               },
            });
         }
      };

      onUseEffect();
   }, [proyectosProyecto.paga, dispatch]);

   return (
      <>
         <Row>
            <h1 className={`${s.text_portafolio} text-center`}>Proyectos</h1>
         </Row>
         <Row xs='auto' className='text-center justify-content-center g-3'>
            {loadingProyecto ? <Loading /> : proyectosProyecto.listpags.items.map((r) => <CardPotafolio key={r.id} id={r.id} Estado={r.Estado} imagen={r.imagen} titulo={r.titulo} descripcionCorta={r.descripcionCorta} linkGitHub={r.linkGitHub} linkWeb={r.linkWeb} />)}
         </Row>
         <Row className='pt-3'>
            <Col>
               <Paginado
                  pags={proyectosProyecto.listpags.pags}
                  paga={proyectosProyecto.paga}
                  dispatchNext={() => {
                     dispatch(setPagActualProyectoAction(proyectosProyecto.paga + 1));
                  }}
                  dispatchPrev={() => {
                     dispatch(setPagActualProyectoAction(proyectosProyecto.paga - 1));
                  }}
                  dispatchSelect={(nom) => {
                     dispatch(setPagActualProyectoAction(nom));
                  }}
               />
            </Col>
         </Row>
      </>
   );
};

export default Portafolio;
