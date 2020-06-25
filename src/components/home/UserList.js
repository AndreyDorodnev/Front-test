import React, {useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

export default props => {

    const [addMenu,setAddMenu] = useState(false);

    const onListScroll = (event) => {
        if(event.target.scrollTopMax - event.target.scrollTop<100)
            props.onBottomScroll();
    }

    const onShowHideAddMenu = () => {
        setAddMenu(val => !val);
    }

    return (
        <Card>
        <Card.Header>Users</Card.Header>
        <ListGroup onScroll={onListScroll}>
                {
                    props.data?
                    props.data.map(element=>{
                        return (
                            <ListGroup.Item as="div" key={element.id} action variant="light">
                                <Container>
                                    <Row>
                                        <Col><Image src={element.avatar} roundedCircle /></Col>
                                        <Col>
                                        <p>{element.email}</p>
                                        <p>{`${element.first_name} ${element.last_name}`}</p>
                                        <Button variant="primary" onClick={e=>props.onEditClick(element.id)}>Edit</Button>
                                        <Button variant="danger" onClick={e=>props.onItemDelete(element.id)} >Delete</Button>
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