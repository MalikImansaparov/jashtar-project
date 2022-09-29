import React from "react";

const MODAL_STYLES = {
    position: "absolute",
    zIndex: "1000",
    top: "400px",
    left: "50%",
    bottom: "200px",
    transform: "translate(-50%, -50%)",
    height: "659px",
    background: "#fff",
    overflow: "auto",
    borderRadius: "4px",
    outline: "none",
};
const OVERLAY_STYLE = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "1000",
    overflowY: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
};

const WRAPPER = {
    height: "100px !important",
    width: "100%",
}

const Popover = ({ open, children }) => {
    if (!open) return null;
    return (
        <>
            <div style={OVERLAY_STYLE}>
                <div style={MODAL_STYLES}>{children}</div>
            </div>
            <div className={WRAPPER}></div>
        </>
    );
};

export default Popover;
