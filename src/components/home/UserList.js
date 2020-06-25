import React, {useRef} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default props => {

    const listRef = useRef(null);

    const onListScroll = (event) => {
        console.log('SCROLL',event.target);
        // debugger;
        if(event.target.scrollTopMax - event.target.scrollTop<100)
            props.onBottomScroll();
    }

    return (
        <Card>
        <Card.Header>Users</Card.Header>
        <ListGroup ref={listRef} onScroll={onListScroll}>
                {
                    props.data?
                    props.data.map(element=>{
                        return (
                            <ListGroup.Item key={element.id} action variant="light">
                                <Container>
                                    <Row>
                                        <Col><Image src={element.avatar} roundedCircle /></Col>
                                        <Col>
                                        <p>{element.email}</p>
                                        <p>{`${element.first_name} ${element.last_name}`}</p>
                                        </Col>
                                    </Row>
                                </Container>
                                
                            </ListGroup.Item>
                        )
                    })
                    :
                    null
                }
        </ListGroup>
        </Card>
    )
}