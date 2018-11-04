import * as React from "react";
import { Col, Grid, Panel, Row } from "react-bootstrap";

export class SliderDescription extends React.PureComponent {

    public render() {

        return (
            <Row>
                <Col xs={6} md={6}>
                    <Panel bsStyle="slider-description">
                        <Panel.Heading>
                        </Panel.Heading>
                        <Panel.Body>Panel content</Panel.Body>
                    </Panel>
                </Col>
            </Row>

        );

    }
}
