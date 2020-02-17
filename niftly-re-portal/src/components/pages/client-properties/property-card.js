import React, {useState} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './property-card.css';
import {Link} from 'react-router-dom';

const PropertyCard = ({ data, favorited=false}) => {

    return (
        <Link to={`/dashboard/client-account/property/${data.mlsId}`}>
        <Card style={{
            width: "300px",
            height: "350px",
            display: "inline-block",
            borderRadius: "10px",
        }}>         
            <CardImg style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px"
            }} top width="100%" height="70%" src={data.photos[0]} alt="Card image cap" />
            
            <CardBody>
                <div style={{position: 'absolute', transform: 'translate(0rem, -1.75rem)', right: 0, left: 0}}>
                    <svg style={{display: 'block', margin: 'auto'}} width="93" height="29" viewBox="0 0 93 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5 13.4997C19 22.4998 4.83333 28.1661 0 28.4994H46.5V0C46.5 0 30.2498 -3.52859e-05 23.5 13.4997Z" fill="white"/>
                        <path d="M69 13.4997C73.5 22.4998 87.6667 28.1661 92.5 28.4994H46V0C46 0 62.2502 -3.52859e-05 69 13.4997Z" fill="white"/>
                    </svg>
                    <FontAwesomeIcon style={iconStyle} className="icon" icon={faHeart} />
                </div>
                <CardTitle style={{textAlign: 'center'}}>{data.streetNumberText} {data.address.streetName}</CardTitle>
                <CardSubtitle style={{textAlign: 'center'}}>{data.address.city}</CardSubtitle>
                <CardText style={{textAlign: 'center'}}>{data.listPrice}</CardText>
            </CardBody>
        </Card>
</Link>
    )
}

const cardStyle = {
    "width": "250px",
    "height": "300px",
    "display": "inline-block",
}

const iconStyle = {
    left: '50%', 
    transform: 'translate(-50%, -1.45rem)', 
    position: 'fixed', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 'auto',
    zIndex: 10000,
    fontSize: 18
}

export default PropertyCard;