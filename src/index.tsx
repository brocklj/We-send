import * as React from "react";
import "react-bootstrap";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById("app"),
);
