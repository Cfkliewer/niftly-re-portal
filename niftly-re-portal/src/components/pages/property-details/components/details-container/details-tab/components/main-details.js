import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faHeart, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Modal } from 'reactstrap';

const FAVORITE_PROPERTY = gql`
    mutation Favorite($mlsId: String!) {
        addFavoriteProperty(mlsId: $mlsId){
            propertyId
          }
        }
`;

const REMOVE_FAVORITE_PROPERTY = gql`
    mutation RemoveFavorite($mlsId: String!) {
        removeFavoriteProperty(mlsId: $mlsId) {
            propertyId
        }
    }
`;


const MainDetails = ({address, listPrice, subdivision, mlsId, favorited}) => {

    const [favoriteProperty] = useMutation(FAVORITE_PROPERTY)
    const [removeFavoriteProperty] = useMutation(REMOVE_FAVORITE_PROPERTY);
    const [modalOpen, setModalOpen] = useState(false);
    const [favorite, setFavorite] = useState(favorited);

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const handleFavorite = () => {
        if (localStorage.getItem('token') !== null) {
            if (!favorited) {
                favoriteProperty({ variables: { mlsId: mlsId } });
            } else {
                removeFavoriteProperty({ variables: { mlsId: mlsId } });
            }
            setFavorite(!favorited);
        } else {
            setModalOpen(true)
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div style={{
                        textAlign: 'center'
                    }}>
                        <h2>{address.streetNumber} {address.streetName}</h2>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div style={{
                        textAlign: 'center'
                    }}>
                        <h2>{formatter.format(listPrice)}</h2>
                    </div>
                </Col>
            </Row>

            <Row style={{
                paddingTop: "20px"
            }}>
                <Col>
                    <div style={{
                        textAlign: 'center'
                    }}>
                        <h4><FontAwesomeIcon icon={faCity} /> City: {address.city} </h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div style={{
                        textAlign: 'center'
                    }}>
                        <h4>Subdivision: {subdivision}</h4>
                    </div>
                </Col>
            </Row>

            {/* <Row>
                <FontAwesomeIcon icon={faHeart} />
            </Row>

            <Row>
                Share Me!
            </Row>

            <Row>
                <ShareBtnRow />
            </Row>             */}
        </Container>
        
    )
}

export default MainDetails;