import React, { Component } from 'react';
import { Button, Modal, Form, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

export class FetchStore extends Component {
    constructor(props) {
        super(props);
        this.state = { storelists: [], loading: true };

        fetch('api/Store/Index')
            .then(response => response.json())
            .then(data => {
                this.setState({ storelists: data, loading: false });
            });       
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderStoreTable(this.state.storelists);

        return <div>
            <h1>
                <AddStoreModal />
            </h1>
            <p>{contents}</p>
        </div>;
    }

    // Returns the HTML table to the render() method.  
    renderStoreTable(storelists) {
        return <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Store</th>
                    <th>Address</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {!storelists || storelists.length <= 0 ?
                    <tr>
                        <td colSpan="6" align="center"><b>No Store Record</b></td>
                    </tr>
                    : storelists.map(storelist =>
                        <tr key={storelist.id}>
                            <td>{storelist.name}</td>
                            <td>{storelist.address}</td>
                            <td>
                                <button class="ui yellow icon left labeled button">
                                    Edit
                                <i aria-hidden="true" class="edit icon"></i>
                                </button>
                            </td>
                            <td>
                                <button class="ui red icon left labeled button" onClick={this.handleDelete}>
                                    Delete
                                <i aria-hidden="true" class="trash icon"></i>
                                </button>
                            </td>
                        </tr>
                    )}
            </tbody>
        </table>
    }
}

//Modal for adding/creating new product to be saved in the database
class AddStoreModal extends Component {
    state = { open: false }

    show = (size) => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state

        return (
            <div>
                <Button content='NewStore' primary onClick={this.show('mini')} />

                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header>Create Store</Modal.Header>
                    <Modal.Content>
                        <p><AddStoreForm /></p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative>No</Button>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content='Yes'
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

//Form inside the AddStoreModal for adding new store in the database
const AddStoreForm = () => (
    <Form className='addnewstoreform'>
        <Form.Field>
            <label>Store Name</label>
            <input placeholder='Store Name' className='storename' />
        </Form.Field>
        <Form.Field>
            <label>Store Address</label>
            <input placeholder='Store Address' className='storeaddress' />
        </Form.Field>
    </Form>
)

