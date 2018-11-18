import * as React from "react";
import { Col, Grid, Panel, Row } from "react-bootstrap";
import { getWidgetContent } from "./helpers";

export class SliderDescription extends React.PureComponent {

    public render() {
        const greetWidgets: any = getWidgetContent("home_greet_panel", window.appSettings);
        const greetWidget = greetWidgets[0];
        return (
            <Row>
                <style type="text/css">
                    {`
                    .home-greet-panel {
                        color: #fff;
                        background-color: rgba(0, 0, 0, 0.70);
                    }
                    .home-greet-panel  .panel-heading {
                        padding: 3px 0px;
                        background-color: #7a67de;
                    }
                    .home-greet-panel  .panel-body h2 {
                        margin-top: 0;
                        font-size: 3rem;
                         color: #fff;
                    }
                    `}
                </style>
                <Col>
                    <Panel className="home-greet-panel">
                        <Panel.Heading>
                        </Panel.Heading>
                        <Panel.Body >{greetWidget ? (
                            <div>
                                <h2>{greetWidget.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: greetWidget.text }} />
                            </div>
                        ) : ("")}
                        </Panel.Body>
                    </Panel>
                </Col>
            </Row>

        );

    }
}
