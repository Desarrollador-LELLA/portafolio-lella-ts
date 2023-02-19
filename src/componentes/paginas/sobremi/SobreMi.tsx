import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import CardRedes from '../../comp/card_redes/CardRedes';
import s from './sobremi.module.css'
import icTester from '../../imagenes/ic_sobre.svg'
import icFirebase from '../../imagenes/ic_firebase.svg'
import icGitHub from '../../imagenes/ic_github.svg'
import icBootstrap from '../../imagenes/ic_bootstrap.svg'
import icSharp from '../../imagenes/ic_sharp.svg'
import icJava from '../../imagenes/ic_java.svg'
import icHtml from '../../imagenes/ic_html.svg'
import icCss from '../../imagenes/ic_css.svg'
import icMongoDb from '../../imagenes/ic_mongodb.svg'
import icSqlServer from '../../imagenes/ic_sql_server.svg'
import icMySql from '../../imagenes/ic_mysql.svg'
import icKotlin from '../../imagenes/ic_kotlin.svg'
import icJavaScript from '../../imagenes/ic_javascript.svg'
import icPostgreSql from '../../imagenes/ic_postgresql.svg'
import icSequelize from '../../imagenes/ic_sequelize.svg'
import icNodeJs from '../../imagenes/ic_nodejs.svg'
import icReactJs from '../../imagenes/ic_reaccionar_nativo.svg'
import icRedux from '../../imagenes/ic_redux.svg'
import icTypescript from '../../imagenes/ic_typescript.svg'
import icAdmob from '../../imagenes/ic_google_admob.svg'
import icAndroid from '../../imagenes/ic_android.svg'
import icFlutter from '../../imagenes/ic_flutter.svg'
import icDart from '../../imagenes/ic_dart.svg'
import CardHabilidad from '../../comp/card_habilidad/CardHabilidad';

interface ISobreMiProps { }

const SobreMi: FC<ISobreMiProps> = () => {
    return (
        <>
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
            <Row xs='auto' className='text-center justify-content-center g-3'>
                <CardHabilidad id={0} nombre={'Admob'} url={'#'} imagen={icAdmob} nivel={5} />
                <CardHabilidad id={0} nombre={'Android'} url={'#'} imagen={icAndroid} nivel={5} />
                <CardHabilidad id={0} nombre={'Bootstrap'} url={'#'} imagen={icBootstrap} nivel={4} />
                <CardHabilidad id={0} nombre={'Css'} url={'#'} imagen={icCss} nivel={4} />
                <CardHabilidad id={0} nombre={'Firebase'} url={'#'} imagen={icFirebase} nivel={4} />
                <CardHabilidad id={0} nombre={'Github'} url={'#'} imagen={icGitHub} nivel={4} />
                <CardHabilidad id={0} nombre={'Html'} url={'#'} imagen={icHtml} nivel={4} />
                <CardHabilidad id={0} nombre={'Java'} url={'#'} imagen={icJava} nivel={4} />
                <CardHabilidad id={0} nombre={'Javascript'} url={'#'} imagen={icJavaScript} nivel={4} />
                <CardHabilidad id={0} nombre={'Kotlin'} url={'#'} imagen={icKotlin} nivel={1} />
                <CardHabilidad id={0} nombre={'MongoDb'} url={'#'} imagen={icMongoDb} nivel={3} />
                <CardHabilidad id={0} nombre={'My Sql'} url={'#'} imagen={icMySql} nivel={3} />
                <CardHabilidad id={0} nombre={'Node'} url={'#'} imagen={icNodeJs} nivel={3} />
                <CardHabilidad id={0} nombre={'PostgreSQL'} url={'#'} imagen={icPostgreSql} nivel={3} />
                <CardHabilidad id={0} nombre={'React JS'} url={'#'} imagen={icReactJs} nivel={4} />
                <CardHabilidad id={0} nombre={'React Native'} url={'#'} imagen={icReactJs} nivel={3} />
                <CardHabilidad id={0} nombre={'Redux'} url={'#'} imagen={icRedux} nivel={4} />
                <CardHabilidad id={0} nombre={'Sequelize'} url={'#'} imagen={icSequelize} nivel={4} />
                <CardHabilidad id={0} nombre={'C Sharp'} url={'#'} imagen={icSharp} nivel={4} />
                <CardHabilidad id={0} nombre={'Sql'} url={'#'} imagen={icSqlServer} nivel={5} />
                <CardHabilidad id={0} nombre={'Typescript'} url={'#'} imagen={icTypescript} nivel={4} />

                <CardHabilidad id={0} nombre={'Flutter'} url={'#'} imagen={icFlutter} nivel={2} />
                <CardHabilidad id={0} nombre={'Dart'} url={'#'} imagen={icDart} nivel={2} />
            </Row>
        </>
    );
};

export default SobreMi;