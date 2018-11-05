import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { AppFooter } from "./AppFooter";
import { NavBar } from "./Navbar";

export interface IPageProps { children: any; }

export class Page extends React.PureComponent<IPageProps> {

    public render() {
        const { children } = this.props;
        return (
            <Grid className="page">
                <Row>
                    <NavBar />
                </Row>
                <Row>
                    {children}
                </Row>
                <Row>
                    <AppFooter />
                </Row>
            </Grid>
        );

    }
}
