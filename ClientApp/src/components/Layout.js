import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import '../Global.css';
import { Footer } from './Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className="SecondaryContainer">
        <NavMenu />
        <Container className = "MainContainer">
          {this.props.children}
        <Container>
             {this.props.children}
        </Container>
            <Footer />
      </div>
    );
  }
}
