import * as React from "react";
import { Col, Grid, Panel, Row } from "react-bootstrap";
import { getWidgetContent } from "./helpers";

export class SliderPosts extends React.PureComponent {

    public render() {
        const greetWidget: any = getWidgetContent("home_greet_panel", window.appSettings);
        return (
            <Row>
                <style type="text/css">
                    {`
                    .home-sliderpost-panel {
                        background-color: rgba(0, 0, 0, 0.46);
                    }
                    .home-sliderpost-panel:nth-of-type(1) {

                        border-left: solid 5px #c8ec5f;
                    }
                    .home-sliderpost-panel:nth-of-type(2)  {

                         border-left: solid 5px #67d7de;
                    }
                    .home-sliderpost-panel:nth-of-type(3)  {

                        border-left: solid 5px #dec567;
                    }
                    `}
                </style>
                <Col>
                    {greetWidget.map((panel: any, i: number) => {
                        if (i < 1) { return ""; }
                        return (
                            <Panel className="home-sliderpost-panel">
                                <Panel.Body >{panel ? (<div dangerouslySetInnerHTML={{ __html: panel.text }} />) : ("")}</Panel.Body>
                            </Panel>
                        );
                    })}
                </Col>
            </Row>
        );

    }
}
