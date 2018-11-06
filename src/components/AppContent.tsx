import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import settings from "./AppSettings";
import { HomeContent } from "./HomeContent";
import { PostContent } from "./PostContent";

export class AppContent extends React.PureComponent {

    public render() {
        const componentMap: any = {
            HomeContent,
            PostContent,
        };
        return (
            <BrowserRouter>
                <Switch>
                    {settings.mainNav.map(({ component, path }: { component: string, path: string }, i: number) =>
                        (
                            <Route exact path={path} key={i} component={componentMap[component]} />
                        ),
                    )}
                </Switch>
            </BrowserRouter>
        );
    }
}
