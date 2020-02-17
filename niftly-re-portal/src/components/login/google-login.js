import React, { useContext, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { LoginContext } from '../../state/login-state';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import {Redirect} from 'react-router-dom';

const SET_USER = gql`
mutation Login($userInput: UserInput!)
{
  login(user:$userInput) {
    email,
    firstName,
    lastName,
    role,
    imageUrl,
    token
  }
}
`;

const GoogleLoginModule = () => {
    const [user, setUser] = useContext(LoginContext);
    const [authenticated, setAuthenticated] = useState(false);

    const [login, {mutationData}] = useMutation(SET_USER, {onCompleted: (data) => {
        console.log('data');
        console.log(data);
        localStorage.setItem('token', data.login.token);
        console.log('setting user');
        setUser({
            name: data.login.firstName + ' ' + data.login.lastName, 
            imageUrl: data.login.imageUrl,
            roles: data.login.role
        });

        setAuthenticated(true);
    }});



    const handleSuccess = (data) => {
        login({
            variables: {
                userInput: {
                    email: data.profileObj.email,
                    authenticationProvider: data.tokenObj.idpId,
                    //authenticationProviderId: data.profileObj.googleId,
                    firstName: data.profileObj.givenName,
                    lastName: data.profileObj.familyName,
                    imageUrl: data.profileObj.imageUrl,
                }
            }
        });

    }

    const handleFailure = (e) => {
        console.log('failed nerd');
        console.log(`error`);
        console.log(e);
    }

    if(authenticated) { return <Redirect to="/dashboard"/>}
    else {
        return (
            <GoogleLogin
                clientId="1013809799749-keptlun8ek1g437or2gp3ibdphr218lp.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={handleSuccess}
                onFailure={e => handleFailure(e)}
                redirectUri="http://localhost:3000/authenticate"
            />
        );
    }
}

export default GoogleLoginModule;