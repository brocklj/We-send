import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { Container } from "react-bootstrap/lib/Tab";

export class AppFooter extends React.PureComponent {

    public render() {

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
                        footer 22
                     </div>
                </div>
            </div>
        );

    }
}
