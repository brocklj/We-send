// http://localhost/wp-json/wp/v2/pages?slug=sample-page
import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { LoadingSpinner } from "./LoadingSpinner";
import { NavBar } from "./Navbar";
import { Page } from "./Page";
import { Slider } from "./Slider";

export interface IPageContentProps { location: { pathname: string }; }
export interface IPageContentState { data?: object[]; }

export class PagesContent extends React.PureComponent<IPageContentProps, IPageContentState> {
    public state: IPageContentState = {
        data: null,
    };
    public constructor(props: IPageContentProps) {
        super(props);
    }

    public componentDidMount() {
        const path = window.appSettings.path;
        const slug = this.props.location.pathname.replace("/", "");
        fetch(path + "/wp-json/wp/v2/pages?" + (slug ? ("slug=" + slug) : ""))
            .catch()
            .then((res: Response) => res.json())
            .then((data) => this.setState({ data }));
    }

    public render() {
        const { data } = this.state;
        if (data === null) {
            return (
                <Page>
                    <LoadingSpinner />
                </Page>
            );
        }
        return (
            <Page>
                {data.map((item: any, i: number) => {
                    return (
                        <div key={i}>
                            <h1>{item.title.rendered}</h1>
                            <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                        </div>
                    );
                })}
            </Page>
        );
    }
}

