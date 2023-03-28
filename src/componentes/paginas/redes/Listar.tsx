import { FC } from 'react';
import { Row } from 'react-bootstrap';

interface IListarRedesProps {}

const Listar: FC<IListarRedesProps> = () => {
    return (
        <>
            <h1>Listar</h1>
            <Row xs='auto' className='text-center justify-content-center g-3'>
                {/* <CardRedes id={redes[0].id} nombre={redes[0].nombre} urlRed={redes[0].url} imagen={icGithub} />
                <CardRedes id={redes[1].id} nombre={redes[1].nombre} urlRed={redes[1].url} imagen={icLinkedin} />
                <CardRedes id={redes[2].id} nombre={redes[2].nombre} urlRed={redes[2].url} imagen={icTiktok} />
                <CardRedes id={redes[3].id} nombre={redes[3].nombre} urlRed={redes[3].url} imagen={icFacebook} />
                <CardRedes id={redes[4].id} nombre={redes[4].nombre} urlRed={redes[4].url} imagen={icYoutube} /> */}
            </Row>
        </>
    );
};

export default Listar;
