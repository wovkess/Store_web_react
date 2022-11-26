import React from 'react';
import { Col, Container, Image, Row, Card,Button } from 'react-bootstrap';
let setValut = "$"
const DevicePage = () => {
    const device = { id: 1, name: 'temp', priсe:100, img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2520flowers%2F&psig=AOvVaw3GR6FIeR59FR8qitJpkUXA&ust=1669496908495000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJjfqeGeyvsCFQAAAAAdAAAAABAE` }
    const description = [
        {id:1, title: "Temp", description: 'temp'},
        {id:2, title: "Temp", description: 'temp'},
        {id:3, title: "Temp", description: 'temp'},
        {id:4, title: "Temp", description: 'temp'},
        {id:5, title: "Temp", description: 'temp'}
    ]
    return (
        <Container className="mt-5">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row>
                        <h2>{device.name}</h2>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height: 300, fontSize: 32, border: '1px solid black'}}
                    >
                        <h3>{device.priсe + setValut}</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row
            className='d-flex flex-column m-3'>
                <h1>Material used</h1>
                {description.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgrey' : 'transparent'}}>
                        {info.title}: {info.description} 
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;