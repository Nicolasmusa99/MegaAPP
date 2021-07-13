import react from 'react-bootstrap';

import { Container, Row, Col } from 'react-bootstrap';

export default function ItemList({greeting}) {


    return(

    <Container>
        <Row>
            <Col><h1>{greeting}</h1></Col>
        </Row>
    </Container>
    );
}