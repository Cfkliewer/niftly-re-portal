import React from 'react'
import { Row, Container } from 'reactstrap';
import InfoContainer from '../../../../../../common/info/info-container/info-container';

const ConstructionDetails = ({data}) => {

    return (
        <Container>
            <InfoContainer title={'Year Built'} information={data.property.yearBuilt} />
            <InfoContainer title={'Roof'} information={data.property.roof} />
            <InfoContainer title={'Foundation'} information={data.property.foundation} />
            <InfoContainer title={'Lot Description'} information={data.property.lotDescription} />
            <InfoContainer title={'Construction'} information={data.property.construction} />
        </Container>      
    )
}

export default ConstructionDetails;