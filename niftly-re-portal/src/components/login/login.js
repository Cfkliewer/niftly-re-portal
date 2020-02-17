import React, {useState} from 'react';
import {Button} from 'reactstrap';
import GoogleLoginModule from './google-login';

const Login = () => {
    /* Check if user is logged in, if they are then redirect */


    return (
        <div style={styles.containerStyle}>
            <div style={{display: 'flex', flexDirection: 'column', padding: '2em'}}>
                <div style={styles.inputContainerStyle}>
                    <div>Username:</div>
                    <input style={styles.inputStyle} type="text"/>
                </div>
                <div style={styles.inputContainerStyle}>
                    <div>Password:</div>
                    <input style={styles.inputStyle} type="text"/>
                </div>
                <Button style={styles.buttonStyle}>Submit</Button>
                <div style={{alignSelf:'center', marginTop: '1em', marginBottom: '1em'}}>or</div>
                <GoogleLoginModule />
            </div>
        </div>   
    );
}

export default Login;

const styles = {
    containerStyle: {
        backgroundColor: '#f2f2f2', 
        width: '50%', 
        borderRadius: '5px',
        boxShadow: '0px 0px 4px 4px rgba(0,0,0,.5)'
    },
    inputStyle: {
        borderRadius: '5px',
        border: '1px solid rgba(0,0,0,.2)',
        height: '3em',
        width: '100%'
    },
    inputContainerStyle: {
        marginTop: '1em',
        marginBottom: '1em'
    },
    buttonStyle: {
        borderRadius: '5px',
        backgroundColor: '#ffa64d',
        width: '50%',
        height: '3em',
        border: 'none',
        alignSelf: 'center',
        marginTop: '2em'
    }
}