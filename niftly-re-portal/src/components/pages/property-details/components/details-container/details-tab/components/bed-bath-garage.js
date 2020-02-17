import React from 'react';
import { 
    Row, Col, Card, CardBody, CardTitle, CardText
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBed, faWarehouse, faToilet
} from '@fortawesome/free-solid-svg-icons';
import DetailFeature from './detail-feature';

const BadBathGarage = ({beds, baths, garageSpaces}) => {
    return (
        <div>
            <Row>
                <Col md={4}>
                    <DetailFeature title='Bedrooms' value={beds}/>
                </Col>

                <Col md={4}>
                    <DetailFeature title='Bathrooms' value={baths}/>
                </Col>

                <Col md={4}>
                    <DetailFeature title='Garage Spaces' value={Math.round(parseFloat(garageSpaces) * 10) / 10}/>
                </Col>

            </Row>
        </div>
    )
}

export default BadBathGarage;