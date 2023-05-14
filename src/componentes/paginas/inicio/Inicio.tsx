import { FC, useEffect } from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import s from './inicio.module.css';
import CardRedes from '../../comp/card_redes/CardRedes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Loading from '../../comp/loading/Loading';
import { ThunkDispatch } from 'redux-thunk';
import { RedActions } from '../../../interfaces/IRed';
import { getListRedes, setErrorRedAction, setListaRedAction, setLoadingRedAction } from '../../../redux/actions/redesAction';
import icAppStore from '../../imagenes/ic_app_store.png';
import icPlayStore from '../../imagenes/ic_play_store.png';

interface IInicioProps {}

const Inicio: FC<IInicioProps> = () => {
   const { loadingRed, redesRed } = useSelector((state: RootState) => state.red);
   const dispatch = useDispatch<ThunkDispatch<RootState, null, RedActions>>();

   useEffect(() => {
      const onUseEffect = () => {
         getListRedes({
            onLoading: (v) => {
               dispatch(setLoadingRedAction(v));
            },
            onError: (msg) => {
               console.log(msg);
               dispatch(setErrorRedAction(msg));
            },
            onSuccess: (msg) => {
               dispatch(setListaRedAction(msg.resultado));
            },
         });
      };

      onUseEffect();
   }, [dispatch]);

   return (
      <>
         <Row className='text-center justify-content-center'>
            <Col>
               <h1 className={`${s.text_inicio}`}>Hola, Soy Luis</h1>
               <h3 className={`${s.text_inicio}`}>Desarrollador Full Stack</h3>
               <h5 className={`${s.text_inicio}`}>Front End - Back End</h5>
               <h6 className={`${s.text_inicio}`}>App Android - Web</h6>
            </Col>
            <Col className={s.contri_inicio}>
               <h6 className={`${s.text_inicio}`}>GitHub Contribuciones Ultimas 20 Semanas</h6>
               <Image src='https://ssr-contributions-svg.vercel.app/_/desarrollador-lella?chart=calendar&format=svg&weeks=20&dark=true' alt='GitHub Contribuciones' />
            </Col>
         </Row>
         <Row xs='auto' className='text-center justify-content-center'>
            <h1 className={`${s.text_inicio}`}>Mis Redes</h1>
         </Row>
         <Row xs='auto' className='text-center justify-content-center g-3'>
            {loadingRed ? <Loading /> : redesRed.map((r) => <CardRedes key={r.id} nombre={r.nombre} link={r.link} imagen={r.imagen} id={r.id} />)}
         </Row>
         <Row xs='auto' className='text-center justify-content-center'>
            <h4 className={`${s.text_inicio} mt-2`}>Proximamente</h4>
         </Row>
         <Row xs='auto' className='text-center justify-content-center'>
            <Col xs='auto'>
               <Image src={icPlayStore} alt='Play Store' width='180px' />
            </Col>
            <Col xs='auto'>
               <Image src={icAppStore} alt='App Store' width='180px' />
            </Col>
         </Row>
      </>
   );
};

export default Inicio;
