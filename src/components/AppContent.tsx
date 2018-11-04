import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import settings from "./AppSettings";
import { HomeContent } from "./HomeContent";
import { PostContent } from "./PostContent";

export class AppContent extends React.PureComponent {

    public render() {
        const componentMap = {
            HomeContent,
            PostContent,
        };
        // @ts-ignore
        return (
            <BrowserRouter>
                <Switch>
                    {settings.mainNav.map((navItem: { component: string, path: string }) =>
                        (                                                    // @ts-ignore
                            <Route exact path={navItem.path} component={componentMap[navItem.component]} />
                        ),
                    )}
                </Switch>
            </BrowserRouter>
        );
    }
}
