import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import AddNewCustomerModal from './AddNewCustomerModal';
//import DeleteCustomerModal from './DeleteCustomer';
import { Button, Modal, Form, Icon } from 'semantic-ui-react'

export class FetchCustomer extends Component {
    static displayName = FetchCustomer.name;

    constructor(props) {
        super(props);
        this.state = { cuslists: [], loading: true };
    }

    componentDidMount() {
        this.populateCustomerData();
    }


    static renderCustomersTable(cuslists) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {!cuslists || cuslists.length <= 0 ?
                        <tr>
                            <td colSpan="6" align="center"><b>No Customer Record</b></td>
                        </tr>
                        : cuslists.map(cuslist =>
                            <tr key={cuslist.id}>
                                <td>{cuslist.name}</td>
                                <td>{cuslist.address}</td>
                                <td>
                                    <button class="ui yellow icon left labeled button">
                                        Edit
                                <i aria-hidden="true" class="edit icon"></i>
                                    </button>
                                </td>
                                <td>
                                    <Button color='red' icon labelPosition='left' >
                                    <Icon name='trash alternate' />Delete</Button>
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchCustomer.renderCustomersTable(this.state.cuslists);

        return (
            <div>
                <h1>
                    <AddNewCustomerModal/>

                </h1>
                <p>{contents}</p>
            </div>
        );
    }

    async populateCustomerData() {
        const response = await fetch('api/Customer/Index');
        const data = await response.json();
        this.setState({ cuslists: data, loading: false });
    }
}
