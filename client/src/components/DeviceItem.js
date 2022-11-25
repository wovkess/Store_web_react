import React from 'react';
import { Col, Card, Image } from 'react-bootstrap'

const DeviceItem = ({ device }) => {
    return (
        <Col md={3}>
            <Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
                <Image width={150} height={150} src={device.img} />
                <div>
                    <div>Samsung.....</div>
                </div>
            </Card>
        </Col >
    );
};

export default DeviceItem;