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
                        background-image: url("https://d39-a.sdn.szn.cz/d_39/c_img_F_N/wYsWL.jpeg?fl=cro,185,46,1699,955|res,450,,3|jpg,80");
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
