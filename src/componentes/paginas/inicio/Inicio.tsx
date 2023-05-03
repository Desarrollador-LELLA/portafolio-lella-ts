import { FC, useEffect, useState } from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import s from './inicio.module.css';
import { redes } from '../../../utilidades/datos';
import CardRedes from '../../comp/card_redes/CardRedes';
import icFacebook from '../../imagenes/ic_facebook.svg';
import icGithub from '../../imagenes/ic_github.svg';
import icLinkedin from '../../imagenes/ic_linkedin.svg';
import icTiktok from '../../imagenes/ic_tiktok.svg';
import icYoutube from '../../imagenes/ic_youtube.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Loading from '../../comp/loading/Loading';
import { ThunkDispatch } from 'redux-thunk';
import { RedActions } from '../../../interfaces/IRed';
import { getListRedes, setErrorRedAction, setListaRedAction, setLoadingRedAction } from '../../../redux/actions/redesAction';
import icAppStore from '../../imagenes/ic_app_store.png'
import icPlayStore from '../../imagenes/ic_play_store.png'

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
   }, []);

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
            {/* <CardRedes id={redes[0].id} nombre={redes[0].nombre} urlRed={redes[0].url} imagen={icGithub} />
                <CardRedes id={redes[1].id} nombre={redes[1].nombre} urlRed={redes[1].url} imagen={icLinkedin} />
                <CardRedes id={redes[2].id} nombre={redes[2].nombre} urlRed={redes[2].url} imagen={icTiktok} />
                <CardRedes id={redes[3].id} nombre={redes[3].nombre} urlRed={redes[3].url} imagen={icFacebook} />
                <CardRedes id={redes[4].id} nombre={redes[4].nombre} urlRed={redes[4].url} imagen={icYoutube} /> */}
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
