import React, { useState } from 'react';
import DashboardTable from './dashboard-components/table/table';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import NavBar from './navbar/navbar';
import ClientFavorites from './pages/client-properties/agent-client-account';
import PropertyDetailsContainer from './pages/property-details/property-details';
import {Route, Switch} from 'react-router-dom';



const AgentDashboard = () => {
    return(
            <div style={styles.containerStyle}>
                <div style={{flex: 1}}>
                    <NavBar />
                </div>
                <div style={styles.mainDashboardContainerStyle}>
                    <Switch>
                        <Route exact path="/dashboard">
                            <div style={styles.tableContainerStyle}><DashboardTable></DashboardTable></div>
                        </Route>
                        <Route exact path="/dashboard/client-account/:clientId">
                            <ClientFavorites />
                        </Route>
                        <Route path="/dashboard/client-account/property/:mlsId">
                            {console.log('in props')}
                            <PropertyDetailsContainer />
                        </Route>
                    </Switch>
                </div>
            </div>
    );
}

export default AgentDashboard;

const styles={
    containerStyle: {
        backgroundColor: 'rgb(245, 250, 255)',
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    mainDashboardContainerStyle: {
        flex: 8, 
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tableContainerStyle: {
        width: '80%', 
        height: '80%', 
        backgroundColor: 'white', 
        borderRadius: '10px',
        boxShadow: '0px 0px 8px rgba(0,0,0,.1)',
        paddingLeft: '2em',
        paddingRight: '2em'
    }
}