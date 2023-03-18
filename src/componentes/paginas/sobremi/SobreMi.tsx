import React, { FC, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import CardRedes from '../../comp/card_redes/CardRedes';
import s from './sobremi.module.css';
import icTester from '../../imagenes/ic_sobre.svg';
import icFirebase from '../../imagenes/ic_firebase.svg';
import icGitHub from '../../imagenes/ic_github.svg';
import icBootstrap from '../../imagenes/ic_bootstrap.svg';
import icSharp from '../../imagenes/ic_sharp.svg';
import icJava from '../../imagenes/ic_java.svg';
import icHtml from '../../imagenes/ic_html.svg';
import icCss from '../../imagenes/ic_css.svg';
import icMongoDb from '../../imagenes/ic_mongodb.svg';
import icSqlServer from '../../imagenes/ic_sql_server.svg';
import icMySql from '../../imagenes/ic_mysql.svg';
import icKotlin from '../../imagenes/ic_kotlin.svg';
import icJavaScript from '../../imagenes/ic_javascript.svg';
import icPostgreSql from '../../imagenes/ic_postgresql.svg';
import icSequelize from '../../imagenes/ic_sequelize.svg';
import icNodeJs from '../../imagenes/ic_nodejs.svg';
import icReactJs from '../../imagenes/ic_reaccionar_nativo.svg';
import icRedux from '../../imagenes/ic_redux.svg';
import icTypescript from '../../imagenes/ic_typescript.svg';
import icAdmob from '../../imagenes/ic_google_admob.svg';
import icAndroid from '../../imagenes/ic_android.svg';
import icFlutter from '../../imagenes/ic_flutter.svg';
import icDart from '../../imagenes/ic_dart.svg';
import CardHabilidad from '../../comp/card_habilidad/CardHabilidad';
import { habilidades } from '../../../utilidades/datos';

interface ISobreMiProps {}

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
                <CardHabilidad id={habilidades[0].id} nombre={habilidades[0].nombre} url={habilidades[0].url} imagen={icAdmob} nivel={habilidades[0].nivel} descripcion={habilidades[0].descripcion} />
                <CardHabilidad id={habilidades[1].id} nombre={habilidades[1].nombre} url={habilidades[1].url} imagen={icAndroid} nivel={habilidades[1].nivel} descripcion={habilidades[1].descripcion} />
                <CardHabilidad id={habilidades[2].id} nombre={habilidades[2].nombre} url={habilidades[2].url} imagen={icBootstrap} nivel={habilidades[2].nivel} descripcion={habilidades[2].descripcion} />
                <CardHabilidad id={habilidades[3].id} nombre={habilidades[3].nombre} url={habilidades[3].url} imagen={icCss} nivel={habilidades[3].nivel} descripcion={habilidades[3].descripcion} />
                <CardHabilidad id={habilidades[4].id} nombre={habilidades[4].nombre} url={habilidades[4].url} imagen={icFirebase} nivel={habilidades[4].nivel} descripcion={habilidades[4].descripcion} />
                <CardHabilidad id={habilidades[5].id} nombre={habilidades[5].nombre} url={habilidades[5].url} imagen={icGitHub} nivel={habilidades[5].nivel} descripcion={habilidades[5].descripcion} />
                <CardHabilidad id={habilidades[6].id} nombre={habilidades[6].nombre} url={habilidades[6].url} imagen={icHtml} nivel={habilidades[6].nivel} descripcion={habilidades[6].descripcion} />
                <CardHabilidad id={habilidades[7].id} nombre={habilidades[7].nombre} url={habilidades[7].url} imagen={icJava} nivel={habilidades[7].nivel} descripcion={habilidades[7].descripcion} />
                <CardHabilidad id={habilidades[8].id} nombre={habilidades[8].nombre} url={habilidades[8].url} imagen={icJavaScript} nivel={habilidades[8].nivel} descripcion={habilidades[8].descripcion} />
                <CardHabilidad id={habilidades[9].id} nombre={habilidades[9].nombre} url={habilidades[9].url} imagen={icKotlin} nivel={habilidades[9].nivel} descripcion={habilidades[9].descripcion} />
                <CardHabilidad id={habilidades[10].id} nombre={habilidades[10].nombre} url={habilidades[10].url} imagen={icMongoDb} nivel={habilidades[10].nivel} descripcion={habilidades[10].descripcion} />
                <CardHabilidad id={habilidades[11].id} nombre={habilidades[11].nombre} url={habilidades[11].url} imagen={icMySql} nivel={habilidades[11].nivel} descripcion={habilidades[11].descripcion} />
                <CardHabilidad id={habilidades[12].id} nombre={habilidades[12].nombre} url={habilidades[12].url} imagen={icNodeJs} nivel={habilidades[12].nivel} descripcion={habilidades[12].descripcion} />
                <CardHabilidad id={habilidades[13].id} nombre={habilidades[13].nombre} url={habilidades[13].url} imagen={icPostgreSql} nivel={habilidades[13].nivel} descripcion={habilidades[13].descripcion} />
                <CardHabilidad id={habilidades[14].id} nombre={habilidades[14].nombre} url={habilidades[14].url} imagen={icReactJs} nivel={habilidades[14].nivel} descripcion={habilidades[14].descripcion} />
                <CardHabilidad id={habilidades[15].id} nombre={habilidades[15].nombre} url={habilidades[15].url} imagen={icReactJs} nivel={habilidades[15].nivel} descripcion={habilidades[15].descripcion} />
                <CardHabilidad id={habilidades[16].id} nombre={habilidades[16].nombre} url={habilidades[16].url} imagen={icRedux} nivel={habilidades[16].nivel} descripcion={habilidades[16].descripcion} />
                <CardHabilidad id={habilidades[17].id} nombre={habilidades[17].nombre} url={habilidades[17].url} imagen={icSequelize} nivel={habilidades[17].nivel} descripcion={habilidades[17].descripcion} />
                <CardHabilidad id={habilidades[18].id} nombre={habilidades[18].nombre} url={habilidades[18].url} imagen={icSharp} nivel={habilidades[18].nivel} descripcion={habilidades[18].descripcion} />
                <CardHabilidad id={habilidades[19].id} nombre={habilidades[19].nombre} url={habilidades[19].url} imagen={icSqlServer} nivel={habilidades[19].nivel} descripcion={habilidades[19].descripcion} />
                <CardHabilidad id={habilidades[20].id} nombre={habilidades[20].nombre} url={habilidades[20].url} imagen={icTypescript} nivel={habilidades[20].nivel} descripcion={habilidades[20].descripcion} />

                <CardHabilidad id={habilidades[21].id} nombre={habilidades[21].nombre} url={habilidades[21].url} imagen={icFlutter} nivel={habilidades[21].nivel} descripcion={habilidades[21].descripcion} />
                <CardHabilidad id={habilidades[22].id} nombre={habilidades[22].nombre} url={habilidades[22].url} imagen={icDart} nivel={habilidades[22].nivel} descripcion={habilidades[22].descripcion} />
            </Row>
        </>
    );
};

export default SobreMi;
