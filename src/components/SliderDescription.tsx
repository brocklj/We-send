import * as React from "react";
import { Col, Grid, Panel, Row } from "react-bootstrap";
import { getWidgetContent } from "./helpers";

export class SliderDescription extends React.PureComponent {

    public render() {
        const greetWidget: any = getWidgetContent("home_greet_panel", window.appSettings);
        return (
            <Row>
                <style type="text/css">
                    {`
                    .home-greet-panel {
                        background-color: rgba(0, 0, 0, 0.46);
                    }
                    .home-greet-panel  .panel-heading {
                        padding: 3px 0px;
                        background-color: #7a67de;
                    }
                    `}
                </style>
                <Col>
                    <Panel className="home-greet-panel">
                        <Panel.Heading>
                        </Panel.Heading>
                        <Panel.Body >{greetWidget ? (<div dangerouslySetInnerHTML={{ __html: greetWidget[0].text }} />) : ("")}</Panel.Body>
                    </Panel>
                </Col>
            </Row>

        );

    }
}
