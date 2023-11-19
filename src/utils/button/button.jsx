import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, children, float = "center" }) => {

    return (
        <a style={{ float: float, color: "white", display: "inline-flex", fontWeight: "600", padding: ".5rem 1rem", whiteSpace: "nowrap", cursor: "pointer", background: "#22C55E", borderRadius: ".375rem", textDecoration: "none" }}>
            {label || children}
        </a>
    );
}
Button.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node,
    float: PropTypes.string,
}

export default Button;
