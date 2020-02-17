import React from 'react';
import { Container, Row } from 'reactstrap';
import InfoContainer from '../../../../../../common/info/info-container/info-container';
import DetailFeature from './detail-feature';

const Features = ({data}) => {
    return (
        <Container>
            <InfoContainer style={styles.detailStyle} title={'Year Built'} information={data.property.yearBuilt} />
            <InfoContainer style={styles.detailStyle} title={'Stories'} information={data.property.stories} />
            <InfoContainer style={styles.detailStyle} title={'Interior Features'} information={data.property.interiorFeatures} list={true} />
            <InfoContainer style={styles.detailStyle} title={'Exterior Features'} information={data.property.exteriorFeatures} list={true} />
            <InfoContainer style={styles.detailStyle} title={'Fireplaces'} information={data.property.fireplaces} />
            <InfoContainer style={styles.detailStyle} title={'Heating'} information={data.property.heating} />
            <InfoContainer style={styles.detailStyle} title={'Laundry Features'} information={data.property.laundryFeatures} list={true}/>
            <InfoContainer style={styles.detailStyle} title={'View'} information={data.property.view} />
            <InfoContainer style={styles.detailStyle} title={'Accessibility'} information={data.property.accessibility} />
        </Container>
    )
}

export default Features;

const styles= {
    detailStyle: {
        flex: 1
    }
}