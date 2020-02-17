import React, {useState} from 'react';
// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row
} from "reactstrap";
import classnames from 'classnames';
import DetailsTab from './details-tab/details-tab';
import Map from './maps-tab/maps-tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';


const DetailsContainer = ({data, favorited}) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
             <Nav     
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist">
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        <FontAwesomeIcon icon={faInfoCircle} /> Details
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        <FontAwesomeIcon icon={faMapMarkedAlt} /> Map
                    </NavLink>
                </NavItem>
            </Nav>
            
            <TabContent style={{
                paddingTop: '10px'
            }} activeTab={activeTab}>
                <TabPane tabId="1">
                <Row>
                    <DetailsTab data={data.propertyById} photos={data.propertyById.photos} favorited={favorited} />
                </Row>
                </TabPane>
                <TabPane tabId="2">
                <Row>
                    <Map geo={data.propertyById.geo} />
                </Row>
                </TabPane>
            </TabContent>

        </div>
    )
}

export default DetailsContainer;