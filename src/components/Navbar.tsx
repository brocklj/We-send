import * as React from "react";
import { Button, ButtonToolbar, MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import settings from "./AppSettings";


export class NavBar extends React.PureComponent {

    public render() {
        return (
            <div>
                <style type="text/css">
                    {`

                 `}
                </style>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">We-Send</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        {settings.mainNav.map(({ label, path }, i) => (
                            <li>
                                <Link to={path}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
