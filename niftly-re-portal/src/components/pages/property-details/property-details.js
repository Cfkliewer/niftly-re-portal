import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Container } from 'reactstrap';
import DetailsContainer from './components/details-container/details-container';
import {useParams} from 'react-router-dom';

const GET_PROPERTY = gql`
    query getPropertyById($mlsId: String!){
        propertyById(mlsId: $mlsId) {
          mlsId
          property{
            style
            bathsFull
            bathsHalf
            stories
            fireplaces
            heating
            foundation
            laundryFeatures
            lotDescription
            pool
            bedrooms
            interiorFeatures
            exteriorFeatures
            view
            subdivision
            construction
            type
            garageSpaces
            accessibility
            yearBuilt
            roof
            parking {
              spaces
              description
            }
          }
          listPrice
          listingId
          address {
              streetNumberText
              streetNumber
              streetName
              city
          }  
          association {
            name
            fee
            amenities
          }
          sales {
            closeDate
            closePrice
          }
          school {
            middleSchool
            highSchool
            elementarySchool
          }
          geo {
            county
            lat
            lng
            marketArea
            directions
          }
          tax {
            taxYear
            taxAnnualAmount
          }
          photos
        }
    }
`;

const PropertyDetailsContainer = ({favorited = false}) => {
    const {mlsId} = useParams();
    console.log('mlsId');
    console.log(mlsId);

    const { loading, error, data } = useQuery(GET_PROPERTY, {
        variables: {mlsId}
    });

    if (data){
        return (
            <Container style={{padding: '2em'}}>
                <DetailsContainer data={data} favorited={favorited}/>
            </Container>
        )
    }


    return (
        <div>
             Property Details
        </div>
    )
}

export default PropertyDetailsContainer;