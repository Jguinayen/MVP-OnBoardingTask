import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

export class FetchProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { prodlists: [], loading: true };

        fetch('api/Product/Index')
            .then(response => response.json())
            .then(data => {
                this.setState({ prodlists: data, loading: false });
            });      
    }

    handleDelete(id) {

        fetch('api/Product/Delete/' + id, {
            method: 'delete'
        }).then(data => {
            this.setState(
                {
                    prodlist: this.state.prodlist.filter((rec) => {
                        return (rec.id != id);
                    })
                });
        });

    }


    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderProductTable(this.state.prodlists);

        return <div>
            < h1 >
                <AddProductModal />
            </h1 >
            <p>{contents}</p>
        </div >;
    }

    // Returns the HTML table to the render() method.  
    renderProductTable(prodlists) {
        return <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {!prodlists || prodlists.length <= 0 ?
                    <tr>
                        <td colSpan="6" align="center"><b>No Product Record</b></td>
                    </tr>
                    : prodlists.map(prodlist =>
                        <tr key={prodlist.id}>
                            <td>{prodlist.name}</td>
                            <td>{prodlist.price}</td>
                            <td>
                                <button class="ui yellow icon left labeled button">
                                    Edit
                                <i aria-hidden="true" class="edit icon"></i>
                                </button>
                            </td>
                            <td>
                                <DeleteProductModal />
                            </td>
                        </tr>
                    )}
            </tbody>
        </table>
    }
}

//Modal for adding/creating new product to be saved in the database
class AddProductModal extends Component {
    state = { open: false }

    show = (size) => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state

        return (
            <div>
                <Button content='NewProduct' primary onClick={this.show('mini')} />

                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header>Create Product</Modal.Header>
                    <Modal.Content>
                        <p><AddProductForm /></p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative on onClick={this.close}>No</Button>
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


//Form inside the AddProduct Modal for adding new product in the database
const AddProductForm = () => (
    <Form className='addnewproductform'>
        <Form.Field>
            <label>Product Name</label>
            <input placeholder='Product Name' className='productname' />
        </Form.Field>
        <Form.Field>
            <label>Product Price</label>
            <input placeholder='Product Price' className='productprice' />
        </Form.Field>
    </Form>
)

//Modal for deleting product to be saved in the database
class DeleteProductModal extends Component {
    state = { open: false }

    show = (size) => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state

        return (
            <div>

                <button class="ui red icon left labeled button" onClick={this.show('mini')}>
                    Delete
                <i aria-hidden="true" class="trash icon"></i>
                </button>
                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header>Delete Product</Modal.Header>
                    <Modal.Content>
                        <p>Are you sure?</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative onClick={this.close}>No</Button>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content='Yes'
                            onClick={this.handleDelete}
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

//<button class="ui red icon left labeled button" onClick={this.handleDelete}>
//    Delete
//                <i aria-hidden="true" class="trash icon"></i>
//</button> 
