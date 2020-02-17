import React, {useState, useEffect} from 'react';
import { Row, Col } from 'reactstrap';
import { CreatePlaceholderCardGrid } from './../home-search/search-results/utils';
import PropertyCard from './../home-search/search-results/components/property-card';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {useTransition, animated} from 'react-spring';


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


const ClientFavorites = ({location}) => {
    const id = location.search.substring(location.search.indexOf("=") + 1, location.search.length);
    console.log('asking for client property data. my token is: ' + localStorage.getItem('token'));
    const { loading, error } = useQuery(GET_PROPERTIES, {
        variables: {clientId: location.search ? id : ""},
        onCompleted: (data)=> {
            console.log('got data');
            console.log(data);
        if(data) {
            let favorite_props = data.getClientFavoriteProperties.map(fp => fp.propertyId);
            let filtered_data = data.properties.filter(p => favorite_props.includes(p.mlsId));
            console.log('filtered');
            console.log(filtered_data);
            setFavorite(filtered_data);
        }
    }, fetchPolicy: 'no-cache'});

    const [favorites, setFavorite] = useState([]);
    const transition = useTransition(favorites, item => item.mlsId, {
        unique: true,
        trail: 200,
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' }
    });

    if (loading) return <CreatePlaceholderCardGrid />

    if (error) { console.log(error); return `Error! ${error}`; }

    if (favorites.length > 0) {
        return (
            <Row>
                {transition.map(({item, key, props}) => (
                    <animated.div style={{...props, ...cardStyle}}><PropertyCard key={key} favorited={true} data={item} /></animated.div>
                ))}
            </Row>
        )
    }
    return <CreatePlaceholderCardGrid />
}

const cardStyle = {
    "padding": "10px",
    "textAlign": "center",
    "display": "inline-block"
}

export default ClientFavorites;