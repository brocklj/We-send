import * as React from "react";
import { ButtonToolbar, Col, Grid, MenuItem, Row, SplitButton } from "react-bootstrap";

import { AppContent } from "./AppContent";
import { AppFooter } from "./AppFooter";
import { NavBar } from "./Navbar";

declare global {
    interface Window { appSettings: any; } // tslint:disable-line
    const wpJson = "sds";
}
export interface IAppProps { compiler: string; framework: string; }

export const App = (props: IAppProps) => (

    <AppContent />


);
