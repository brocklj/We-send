import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { Container } from "react-bootstrap/lib/Tab";
import { getWidgetContent } from "./helpers";

export class AppFooter extends React.PureComponent {

    public render() {
        const footerBarContent: object[] = (getWidgetContent("footer_bar", window.appSettings));

        return (
            <div className="footer">
                <style type="text/css">
                    {`
                    .footer {
                        background-color: #2c2d2e;
                        min-height: 8rem;
                        width: 100%;
                        position: absolute;
                        left: 0;
                        color: #fff;
                        bottom: 0;
                    }
                `}
                </style>
                <div>
                    <div className="container">
                        {footerBarContent.map((i: any) => (
                            <div>
                                <h3>{i.title}</h3>
                                <div dangerouslySetInnerHTML={{ __html: i.text }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );

    }
}
