import React from 'react';
import { Row } from 'reactstrap';

const InfoContainer = ({title, information}) => {
    return (
        <>
            <Row style={{
                paddingTop: '20px'
            }}>
                <div>{title}:</div>
            </Row>

            <Row>
                <div>
                    {information}
                </div>
            </Row>
        </>
    )
}



export default InfoContainer;