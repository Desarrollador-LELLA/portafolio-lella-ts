import { FC, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import s from './sobremi.module.css';
import CardHabilidad from '../../comp/card_habilidad/CardHabilidad';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { ThunkDispatch } from 'redux-thunk';
import { HabilidadActions } from '../../../interfaces/IHabilidad';
import Loading from '../../comp/loading/Loading';
import { getListHabilidades, setErrorHabilidadAction, setListaHabilidadAction, setLoadingHabilidadAction } from '../../../redux/actions/habilidadesAction';
import Paginado from '../../comp/paginado/Paginado';

interface ISobreMiProps {}

const SobreMi: FC<ISobreMiProps> = () => {
   const { loadingHabilidad, habilidadesHabilidad } = useSelector((state: RootState) => state.habilidad);
   const dispatch = useDispatch<ThunkDispatch<RootState, null, HabilidadActions>>();

   useEffect(() => {
      const onUseEffect = () => {
         getListHabilidades({
            numpag: habilidadesHabilidad.paga,
            registros: 1,
            onLoading: (v) => {
               dispatch(setLoadingHabilidadAction(v));
            },
            onError: (msg) => {
               console.log(msg);
               dispatch(setErrorHabilidadAction(msg));
            },
            onSuccess: (msg) => {
               dispatch(setListaHabilidadAction(msg.resultado));
            },
         });
      };

      onUseEffect();
   }, [habilidadesHabilidad.paga]);

   return (
      <>
            {console.log(habilidadesHabilidad)}
         <Row className='px-3'>
            <Col>
               <h1 className={`${s.text_sobremi}`}>Sobre Mi</h1>
               <p className={`${s.text_sobremi}`}>Soy un desarrollador Full Stack ubicado en Chile. Tengo una gran pasión por los efectos de interfaz de usuario, las animaciones y la creación de experiencias de usuario intuitivas y dinámicas.</p>
               <p className={`${s.text_sobremi}`}>Persona bien organizada, solucionador de problemas, empleado independiente con gran atención a los detalles.</p>
               <p className={`${s.text_sobremi}`}>Aficionado a las MMA, las actividades al aire libre y las series de TV. Una persona de familia y padre soltero de tres niños rebeldes.</p>
               <p className={`${s.text_sobremi}`}>Interesado en todo el espectro frontend, backend, Android y trabajando en proyectos ambiciosos con personas positivas.</p>
            </Col>
         </Row>
         <Row className='px-3'>
            <h1 className={`${s.text_sobremi}`}>Mis Habilidades</h1>
         </Row>
         <Row>
            <Col>
               <Paginado />
            </Col>
         </Row>
         <Row xs='auto' className='text-center justify-content-center g-3'>
            {loadingHabilidad ? <Loading /> : habilidadesHabilidad.listpags.items.map((r) => <CardHabilidad key={r.id} nombre={r.nombre} link={r.link} imagen={r.imagen} id={r.id} nivel={r.nivel} descripcion={r.descripcion} />)}
         </Row>
         <Row className='pt-3'>
            <Col>
               <Paginado />
            </Col>
         </Row>
      </>
   );
};

export default SobreMi;
