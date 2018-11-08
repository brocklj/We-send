import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { getPages } from "./APIv2";
import { getRoute } from "./helpers";
import { HomeContent } from "./HomeContent";
import { PagesContent } from "./PagesContent";
import { PostContent } from "./PostContent";

export class AppContent extends React.PureComponent {

    public render() {
        const { nav_menu, path } = window.appSettings;
        const componentMap: any = {
            custom: HomeContent,
            page: PagesContent,
        };
        return (
            <BrowserRouter>
                <Switch>
                    {nav_menu.map(({ object, url }: { url: string, object: string }, i: number) => {
                        const route = getRoute(url, path);
                        return (
                            <Route exact path={route} key={i} component={componentMap[object]} />
                        );
                    },
                    )}
                </Switch>
            </BrowserRouter>
        );
    }
}
