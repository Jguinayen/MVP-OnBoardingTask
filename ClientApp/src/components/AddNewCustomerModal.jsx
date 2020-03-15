import React, { Component } from 'react'
import { Button, Modal, Form, Icon } from 'semantic-ui-react'

class AddNewCustomerModal extends Component {
    state = { loading: true };

    show = (size) => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    addNewcustomer = e => {
        e.preventDefault();
        fetch(`api/Customer/Create`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                address: this.state.address
            })
        })
            .then(res => res.json())
            .then(customer => {
                this.props.setState(customer);
                this.props.toggle();
            })
            .catch(err => console.log(err));
    }
    render() {
        const { open, size } = this.state
        return (
            <div>
                <Button primary onClick={this.show('mini')}>NewCustomer</Button>
                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header >Create customer</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label>Name</label>
                                <input placeholder='Name' name='name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Address</label>
                                <input placeholder='Address' name='address' />
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={this.close}>No</Button>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content='Yes'
                            onClick={this.addNewcustomer}
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }

}
export default AddNewCustomerModal;