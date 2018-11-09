import * as React from "react";
import { Button, ButtonToolbar, MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getRoute } from "./helpers";

export class NavBar extends React.PureComponent {

    public render() {
        const { logo_src, path, nav_menu } = window.appSettings;
        return (
            <div>
                <style type="text/css">
                    {`
                    .navbar-brand {
                        height: 8rem;
                    }
                `}
                </style>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="">
                                <img src={logo_src} height="100%" className="site-logo"></img>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            {nav_menu.map(({ title, url }: any, i: number) => (
                                <li key={i}
                                    className={window.location.pathname === getRoute(url, path) ? "active" : ""}>
                                    <Link to={getRoute(url, path)} >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div >
        );
    }
}
