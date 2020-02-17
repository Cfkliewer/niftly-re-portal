import React, {useState, useEffect} from 'react';
import { Row, Col } from 'reactstrap';
import PropertyCard from './property-card';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {useParams} from 'react-router-dom';


const GET_PROPERTIES = gql`
    query clientFavorites($clientId: String!){
        properties {
            mlsId
            address {
                streetNumberText
                streetNumber
                streetName
                city
            }
            listPrice
            listingId   
            photos 
        }
        getClientFavoriteProperties(clientId: $clientId)
        {
            propertyId
        }
    }
`;


const ClientFavorites = () => {
    const {clientId} = useParams();


    const { loading, error } = useQuery(GET_PROPERTIES, {
        variables: {clientId: clientId},
        onCompleted: (data)=> {
        if(data) {
            let favorite_props = data.getClientFavoriteProperties.map(fp => fp.propertyId);
            let filtered_data = data.properties.filter(p => favorite_props.includes(p.mlsId));
            setFavorite(filtered_data);
        }
    }, fetchPolicy: 'no-cache'});

    const [favorites, setFavorite] = useState([]);

    if (error) { console.log(error); return `Error! ${error}`; }

    if (favorites.length > 0) {
        return (
            <div style={{height: '100%', width: '100%', flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start'}}>
                {favorites.map((item, key) => {
                    return <PropertyCard key={key} favorited={true} data={item} />
                    }
                )}
            </div>
        )
    }
    return <div>no favorites</div>
}

const cardStyle = {
    "padding": "10px",
    "textAlign": "center",
    "display": "inline-block"
}

export default ClientFavorites;