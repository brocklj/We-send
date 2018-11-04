import * as React from "react";
import { ButtonToolbar, MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";


export class NavBar extends React.PureComponent {

    public render() {

        return (
            <div>
                <style type="text/css">
                    {`
                    .navbar-header {
                        background-color: none;
                        color: white;
                    }
                 `}
                </style>

                <Navbar bsStyle="header">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">We-Send</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Link
                    </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
                    </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        );
    }



}
