import React, {useState, useEffect} from 'react';
import { 
    Row, Col, Card, CardBody, CardTitle, CardText, CardFooter, Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp, faThumbsDown
} from '@fortawesome/free-solid-svg-icons';
import './detail-feature.css';

const DetailFeature = ({title, value, list=false}) => {

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    const [valueList, setValueList] = useState([]);

    useEffect(() => {
        if(list) {
            setValueList(value.split(','));
        }
    }, []);

    const handleLiked = () => {
        setDisliked(false);
        setLiked(!liked);
    }

    const handleDisliked = () => {
        setLiked(false);
        setDisliked(!disliked);
    }

    return (
        <div style={{
            width: "208px",
            borderRadius: "10px",
            backgroundColor: 'white',
            border: liked ? '1px solid #00e600' : disliked ? '1px solid red' : '1px solid rgba(0,0,0,.2)',
            boxShadow: liked ? '2px 2px 4px rgba(0, 230, 0, .2)' : disliked ? '2px 2px 4px rgba(255, 0, 0, .2)' : 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}> 
                <div style={{
                    textAlign: 'center'
                }}>
                    {title}
                </div>
                <div>
                    {list ? 
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <ul>
                            { valueList.map(v => <li>{v}</li>) }
                        </ul></div> :
                        <div style={{
                            textAlign: 'center'
                        }}>
                            <h2>{value}</h2>
                        </div>                             
                    }
                </div>
        </div>
    );
}

export default DetailFeature;