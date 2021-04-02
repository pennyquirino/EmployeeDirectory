import React from "react";

import "./Style.css";

function Wrapper(props) {
    return <div className="Wrapper">{props.children}</div>;
}

export default Wrapper;