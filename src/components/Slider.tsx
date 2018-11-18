import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { SliderDescription } from "./SliderDescription";
import { SliderPosts } from "./SliderPosts";

export class Slider extends React.PureComponent {

    public render() {

        return (
            <div>
                <style type="text/css">
                    {`
                    .slider {
                        color: white;
                        padding: 3rem;
                        background-color: #868054;
                    }
                    `}
                </style>
                <Grid>
                    <Row className="slider">
                        <Col xs={12} sm={5}>
                            <SliderDescription />
                        </Col>
                        <Col sm={3}></Col>
                        <Col xs={12} sm={4}>
                            <SliderPosts />
                        </Col>
                    </Row>
                </Grid >
            </div>
        );

    }
}
