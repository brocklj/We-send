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
                    }
                    `}
                </style>
                <Grid>
                    <Row className="slider">
                        <Col xs={12} md={8}>
                            <SliderDescription />
                        </Col>
                        <Col xs={6} md={4}>
                            <SliderPosts />
                        </Col>
                    </Row>
                </Grid >
            </div>
        );

    }
}
