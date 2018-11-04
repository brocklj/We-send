import * as React from "react";
import { ButtonToolbar, Col, Grid, MenuItem, Row, SplitButton } from "react-bootstrap";

import { AppContent } from "./AppContent";
import { AppFooter } from "./AppFooter";
import { NavBar } from "./Navbar";


export interface IAppProps { compiler: string; framework: string; }

export const App = (props: IAppProps) => (
    <div>
        <Row id="content">
            <AppContent />
        </Row>
        <Row id="footer">
            <AppFooter />
        </Row>
    </div>

);
