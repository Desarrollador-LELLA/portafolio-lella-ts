import { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import icConstru from '../../imagenes/ic_constru.svg';
import s from './tester.module.css';

interface ITesterProps {}

const Tester: FC<ITesterProps> = () => {
   return (
      <Row sm='auto' className='text-center justify-content-center g-3'>
         <Col>
            <Card className={`${s.tester_tester} h-100`} bg={`black`}>
               <Card.Body>
                  <Card.Img src={icConstru} />
                  <Card.Title>En Construcción</Card.Title>
               </Card.Body>
            </Card>
         </Col>
      </Row>
   );
};

export default Tester;
