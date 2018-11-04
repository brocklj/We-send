import * as React from "react";
import { Grid, Row, Col, SplitButton, MenuItem, ButtonToolbar } from 'react-bootstrap';


export interface HelloProps { compiler: string; framework: string; }

const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

function renderDropdownButton(title: any, i: any) {
    return (
        <SplitButton
            bsStyle={title.toLowerCase()}
            title={title}
            key={i}
            id={`split-button-basic-${i}`}
        >
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
        </SplitButton>
    );
}
export const App = (props: HelloProps) => (
    <Grid>
        <Row className="show-grid">
            <Col xs={12} md={8}>
                <code>{'<Col xs={12} md={8} />'};</code>
            </Col>
            <Col xs={6} md={4}>
                <code>{'<Col xs={6} md={4} />'}</code>
            </Col>
        </Row>

        <Row className="show-grid">
            <Col xs={6} md={4}>
                <code>{'<Col xs={6} md={4} />'}</code>
            </Col>
            <Col xs={6} md={4}>
                <code>{'<Col xs={6} md={4} />'}</code>
            </Col>
            <Col xsHidden md={4}>
                <code>{'<Col xsHidden md={4} />'}</code>
            </Col>
        </Row>

        <Row className="show-grid">
            <Col xs={6} xsOffset={6}>
                <code>{'<Col xs={6} xsOffset={6} />'}</code>
            </Col>
        </Row>

        <Row className="show-grid">
            <Col md={6} mdPush={6}>
                <code>{'<Col md={6} mdPush={6} />'}</code>
            </Col>
            <Col md={6} mdPull={6}>
                <code>{'<Col md={6} mdPull={6} />'}</code>
            </Col>
        </Row>
        <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
    </Grid>

);