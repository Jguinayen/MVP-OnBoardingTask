import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import 'semantic-ui-css/semantic.min.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
            <Navbar color="dark" dark expand="md">
          <Container>
            <NavbarBrand tag={Link} to="/">OnBoardingTask</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex " isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                <NavLink tag={Link} className="text-light" to="/fetch-customer">Customer</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={Link} className="text-light" to="/fetch-product">Product</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={Link} className="text-light" to="/fetch-store">Store</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
