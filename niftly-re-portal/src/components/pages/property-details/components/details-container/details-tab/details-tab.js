import React, { useState } from 'react';
import {
    Row, Col, Button, Collapse
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import AssociationDetails from './components/association';
import MainDetails from './components/main-details';
import PhotoCarousel from '../../../../../common/photo/photo-carousel/photo-carousel';
import BedBathGarage from './components/bed-bath-garage';
import Features from './components/features';
import ConstructionDetails from './components/construction-details';
import DetailFeature from './components/detail-feature';

const DetailsTab = ({data, photos, favorited}) => {

    const [collapseFeatures, setCollapseFeatures] = useState(false);
    const toggleFeatures = () => setCollapseFeatures(!collapseFeatures);

    const [collapseAssociation, setCollapseAssociation] = useState(false);
    const toggleAssociation = () => setCollapseAssociation(!collapseAssociation);

    const [collapseConstructionDetails, setCollapseConstructionDetails] = useState(false);
    const toggleConstructionDetails = () => setCollapseConstructionDetails(!collapseConstructionDetails);

    return (
        <div>
            <Row>
                <Col md={7}>
                    <PhotoCarousel photos={photos} width={680} height={450} />  
                </Col>
                <Col md={5}>
                    <MainDetails address={data.address} listPrice={data.listPrice} subdivision={data.subdivision} mlsId={data.mlsId} favorited={favorited} />
                </Col>
            </Row>

            <Row style={detailChunk}>
                <Col md={12}>
                    <BedBathGarage beds={data.property.bedrooms} baths={data.property.bathsFull + data.property.bathsHalf} garageSpaces={data.property.garageSpaces} />
                </Col>
            </Row>

            <Row style={detailChunk}>
                <Button color="primary" onClick={toggleFeatures} style={{ 
                    marginBottom: '1rem',
                    width: '100%' 
                }}>
                    Features {collapseFeatures ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} /> }
                </Button>
                <Collapse isOpen={collapseFeatures}>
                    <Features data={data} />
                </Collapse>
            </Row>

            {/* <Row>
               
            </Row> */}

            <Row style={detailChunk}>
                <Button color="primary" onClick={toggleAssociation} style={{ 
                    marginBottom: '1rem',
                    width: '100%' 
                }}>
                    Association {collapseAssociation ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} /> }
                </Button>
                <Collapse isOpen={collapseAssociation}>
                    <AssociationDetails associationDetails={data.association} />
                </Collapse>
            </Row>

            <Row style={detailChunk}>
                <Button color="primary" onClick={toggleConstructionDetails} style={{ 
                    marginBottom: '1rem',
                    width: '100%' 
                }}>
                    Construction Details {collapseConstructionDetails ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} /> }
                </Button>
                <Collapse isOpen={collapseConstructionDetails}>
                    <ConstructionDetails data={data} />
                </Collapse>
            </Row>

        </div>
    )
}

const detailChunk = {
    "padding": "15px"
}

export default DetailsTab;