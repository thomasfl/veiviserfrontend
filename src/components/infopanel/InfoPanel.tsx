import React from "react";
import {LenkepanelBase} from "nav-frontend-lenkepanel/lib";
import {Systemtittel} from "nav-frontend-typografi";
import "./infoPanel.less";

const InfoPanelContainer: React.FC<{children: React.ReactNode, className?: string}> = ({children, className}) => {
    return (
        <div className={"infopanel_container " + className}>
            {children}
        </div>
    );
};

type Props = {
    children: React.ReactNode,
    ikon: React.ReactNode,
    href: string,
    onClick?: (event: any) => void
};

const InfoPanel: React.FC<Props> = ({children, ikon, href, onClick}) => {
    return (
        <LenkepanelBase href={href} className="infopanel" onClick={onClick}>
            <span className="infopanel___ikon">
                {ikon}
            </span>
            <Systemtittel className="lenkepanel__heading">{children}</Systemtittel>


        </LenkepanelBase>
    );
};

export {InfoPanelContainer, InfoPanel};
