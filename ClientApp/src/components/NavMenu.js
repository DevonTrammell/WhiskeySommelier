import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Global.css';
import logo from '../img/logo_2.png';

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
      <header className="NavBarContainer">
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                <Container>
                    <NavLink tag={Link} to="/"  rel="noreferrer">
                        <img src={logo} className="logo" alt="Logo" width="200" heigh="100" />
                    </NavLink>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/TastingIntro">Tasting Intro</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-light" to="/TastingNotes">Tasting Notes</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-light" to="/WhiskeyTypes">Whiskey Types</NavLink>
                </NavItem>
                <NavItem>
                <NavLink   tag={Link} className="text-light" to="/AboutUs">About Us</NavLink>
                 </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
