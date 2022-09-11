import React from "react";
import "./tabs.css";

const Tabs = ({ active, onChange, children }) => {
    return (
        <>
            <div
                style={{
                    display: "flex"
                }}
            >
                {children.map((c, index) => (
                    <a
                        href={"javascript: void(0)"}
                        onClick={() => onChange(index)}
                        className={active === index ? "activeTab" : "alink"}
                        style={{
                            width: 100
                        }}
                    >
                        {c.props.title}
                    </a>
                ))}
            </div>
            <div>{children[active]}</div>
        </>
    );
};

export default Tabs;
