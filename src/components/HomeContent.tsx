import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { NavBar } from "./Navbar";
import { Slider } from "./Slider";

export class HomeContent extends React.PureComponent {

    public render() {

        return (
            <div>
                <NavBar />
                <Slider />
            </div>
        );

    }
}
