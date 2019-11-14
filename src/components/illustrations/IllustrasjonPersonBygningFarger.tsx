import * as React from "react";

const IllustrasjonPersonBygningFarger: React.FC<{className?: string}> = ({className}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="52"
            viewBox="0 0 53 52"
            className={className}
        >
            <g fill="none" fillRule="evenodd">
                <g
                    fill="#6AB889"
                    stroke="#6AB889"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M7.652 23.35v22.174h13.305V30.003h11.086v15.521h13.305V24.46"/>
                    <path d="M1 25.5L26.5 0 52 25.5M31.693 4.533h7.76v7.761"/>
                </g>
                <path
                    fill="#FFF"
                    d="M31.38 14.736a4.536 4.536 0 10-9.07.001 4.536 4.536 0 009.07-.001zm-4.535 37.191h4.536l1.868-14.514h3.574V23.807l-6.35-1.815-3.628 7.257-3.629-7.257-6.35 1.815v13.606h3.573l1.87 14.514z"
                />
            </g>
        </svg>
    )
};

export default IllustrasjonPersonBygningFarger;
