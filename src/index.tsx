import * as React from "react";
import * as ReactDOM from "react-dom";
import 'react-bootstrap';

import { App } from "./components/App";

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);