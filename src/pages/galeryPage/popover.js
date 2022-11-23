import React from "react";

const MODAL_STYLES = {
    position: "absolute",
    zIndex: "1000",
    top: "60vh",
    left: "50%",
    bottom: "200px",
    transform: "translate(-50%, -50%)",
    paddingBottom: '30px',
    height: '100%',
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


const Popover = ({ open, children }) => {
    if (!open) return null;
    return (
        <>
            <div style={OVERLAY_STYLE}>
                <div style={MODAL_STYLES}>{children}</div>
            </div>
            <div ></div>
        </>
    );
};

export default Popover;
