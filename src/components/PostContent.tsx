import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { NavBar } from "./Navbar";
import { Slider } from "./Slider";

export class PostContent extends React.PureComponent {

    public render() {

        return (
            <Grid>
                <Row className="nav-bar">
                    <NavBar />
                </Row>
                <Row>
                    Post
                </Row>
            </Grid>
        );

    }
}
