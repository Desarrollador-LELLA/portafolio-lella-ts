import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

interface IDetallePortafolioProps {}

const DetallePortafolio: FC<IDetallePortafolioProps> = () => {
   const { id } = useParams();

   return (
      <>
         <Row>
            <h1>Titulo del Proyecto</h1>
            <Link to='/portafolio'>Volver</Link>
         </Row>
         <Row>
            <Col>
               <p>Imagenes</p>
            </Col>
            <Col>
               <p>Descripcion Larga del Proyecto</p>
            </Col>
         </Row>
         <Row>
            <p>Skill Utilizadas</p>
         </Row>
      </>
   );
};

export default DetallePortafolio;
