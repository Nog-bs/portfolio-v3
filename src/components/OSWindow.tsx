import React from "react";
import "../styles/OSWindow.css";

interface OSWindowProps {}

export const OSWindow: React.FC<OSWindowProps> = () => {
    return (
        <div className="window">
            <div className="titlebar">
                <div className="buttons">
                    <div className="close">
                        <div className="closebutton"></div>
                    </div>
                    <div className="minimize">
                        <div className="minimizebutton"></div>
                    </div>
                    <div className="zoom">
                        <div className="zoombutton"></div>
                    </div>
                </div>
            </div>
            <div className="content">hello</div>
        </div>
    );
};
