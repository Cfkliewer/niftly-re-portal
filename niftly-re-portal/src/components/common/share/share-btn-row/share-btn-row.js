import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ShareBtnRow = () => {
    return (
        <>        
            <Col>
                <Button>
                    <FontAwesomeIcon icon={faEnvelope} /> Email
                </Button>
            </Col>

            {/* <Col>
                <Button color="primary" type="button">
                    <FontAwesomeIcon icon={faFacebookF} /> Facebook
                </Button>
            </Col>

            <Col>
                <Button color="primary" type="button">
                    <FontAwesomeIcon icon={faPinterestP} /> Pinterest
                </Button>
            </Col> */}
        </>         
    )
}

export default ShareBtnRow;