import React from 'react'
import { Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import InfoContainer from '../../../../../../common/info/info-container/info-container';

const AssociationDetails = ({associationDetails}) => {
    return (
        <Container>
            <InfoContainer title={'Association Name'} information={associationDetails.name} />
            <InfoContainer title={'Association Fee'} information={associationDetails.fee} />
            <InfoContainer title={'Amenities'} information={associationDetails.amenities} />
        </Container>
    )
}

export default AssociationDetails;