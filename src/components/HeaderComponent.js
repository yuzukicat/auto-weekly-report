import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <React.Fragment>
        <Navbar dark>
            <div className="row row-header text-light p-0 justify-content-center">
              <div className="col-12">
                <h1>YourName</h1>
              </div>
            </div>
            <Nav navbar>
              <NavItem>
                  <NavLink className="nav-link text-light p-0"  to='/report'><span className="fa fa-check fa-lg"></span> Report</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link text-light p-0" to='/tasks'><span className="fa fa-tasks fa-lg"></span> Tasks</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;