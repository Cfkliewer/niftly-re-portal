import React, {useState} from 'react';
import {
    Table, 
    UncontrolledDropdown, 
    ButtonDropdown,
    DropdownToggle, 
    DropdownItem, 
    DropdownMenu
} from 'reactstrap';
import { faEllipsisV, faUsers} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import './table.css';

const GET_MY_CLIENTS = gql`
    query {
        getMyClients{
            firstName,
            lastName,
            imageUrl,
            id
        }
    }
`;

const DashboardTable = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const {loading, error, data} = useQuery(GET_MY_CLIENTS, {onCompleted: (completedData) => {
        console.log('got clients');
        console.log(completedData);
    }});

    const toggle = () => setDropdownOpen(!dropdownOpen);
    
    
    if(loading) return <div>loading</div>

    if(data) {
    return (
      <div style={{width: '100%', height: '100%'}}>
            <div style={{fontWeight: 'bold', marginLeft: '2em', marginTop: '1em'}}>My Clients<FontAwesomeIcon style={{marginLeft: '.5em'}} color="#00e68a" icon={faUsers}/></div>
            <Table className="align-items-center" responsive>
            <thead className="thead-main">
                <tr>
                    <th scope="col">Client</th>
                    <th scope="col">Last Updated</th>
                    <th scope="col"/>
                </tr>
            </thead>
            <tbody>
                {data.getMyClients.map((c, i) => (
                    <tr style={{backgroundColor:'#FFFFFF'}}>
                        <th scope="row">
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                <img src={c.imageUrl} style={{width: '30px', borderRadius: '30px', marginBottom: '0px'}}/>
                                <div>{c.firstName} {c.lastName}</div>
                            </div>
                        </th>
                        <td className="center-cell">today</td>
                        <td className="text-right center-cell">
                            <UncontrolledDropdown>
                                <DropdownToggle
                                style={{backgroundColor: 'rgba(0,0,0,0)', boxShadow: 'none', border: 'none'}}
                                role="button"
                                size="sm">
                                    <FontAwesomeIcon style={{color: "#00e68a", fontSize: "1.3rem"}} icon={faEllipsisV} />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right" right>
                                    <DropdownItem>
                                        Send Message
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to={`/dashboard/client-account/${c.id}`}>View Favorite Properties</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </td>
                    </tr>)
                )}
            </tbody>
        </Table>
    </div>)}
}

export default DashboardTable;