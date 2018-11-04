import * as React from "react";
import "react-bootstrap";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

const Root = () => (
    <App compiler="TypeScript" framework="React" />
);

ReactDOM.render(
    <Root />,
    document.getElementById("app"),
);
