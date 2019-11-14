import * as React from "react";

const IllustrasjonInfoFarger: React.FC<{className?: string}> = ({className}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="73"
            viewBox="0 0 54 73"
            className={className}
        >
            <g fill="none" fillRule="evenodd">
                <path
                    fill="#669DB4"
                    d="M27 13C13.765 13 3 23.765 3 37s10.765 24 24 24c13.233 0 24-10.765 24-24S40.233 13 27 13z"
                />
                <path
                    fill="#FFF"
                    d="M20 52a2 2 0 110-4h5V34h-3a2 2 0 110-4h5a2 2 0 012 2v16h5a2 2 0 110 4H20zm7-32a3.001 3.001 0 11-.002 5.998A3.001 3.001 0 0127 20z"
                />
            </g>
        </svg>    )
};

export default IllustrasjonInfoFarger;
