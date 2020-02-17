import React, {useState} from 'react';
import { faUsers, faChartLine} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Button} from 'reactstrap';
import './navbar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {

    const [clientSelected, setClientSelected] = useState(true);
    const [analyticSelected, setAnalyticSelected] = useState(false);

    return (
        <div style={styles.navbarStyle}>
            <div style={styles.niftlyStyle}>{'{niftly.}'}</div>
            <Link to="/dashboard">
                <Button onClick={() => {
                    setClientSelected(true);
                    setAnalyticSelected(false);
                }} style={clientSelected ? styles.selectedButtonStyle : styles.buttonStyle}>
                    <div style={styles.buttonLabelStyle}>Clients</div>
                    <FontAwesomeIcon style={{fontSize: '24px'}} icon={faUsers}/>
                </Button>
            </Link>
            <Button onClick={() => {
                setAnalyticSelected(true);
                setClientSelected(false);
            }} style={analyticSelected ? styles.selectedButtonStyle : styles.buttonStyle}>
                <div style={styles.buttonLabelStyle}>Analytics</div>
                <FontAwesomeIcon style={{fontSize: '24px'}} icon={faChartLine}/>
            </Button>
            
        </div>
    )
}

export default NavBar;

const styles = {
    niftlyStyle: {
        color: 'white',
        fontFamily: 'Homenaje, sans-serif',
        fontSize: '28px',
    },
    navbarStyle: {
        flex: .75, 
        height: '100%',
        backgroundColor: '#00284d',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    buttonStyle: {
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none'
    },
    selectedButtonStyle: {
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',
        color: '#00e68a'
    },
    buttonLabelStyle: {
        fontSize: '16px'
    }
}