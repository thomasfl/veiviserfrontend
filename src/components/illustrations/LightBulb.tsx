import React from "react";

const LightBulb: React.FC<{className?: string}> = ({className}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="55"
            viewBox="0 0 52 55"
            className={className}
        >
            <path
                fill="none"
                fillRule="evenodd"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M40.953 25.788c0-8.215-6.712-14.873-14.982-14.873-8.276 0-14.983 6.658-14.983 14.873 0 6.926 4.777 12.731 11.237 14.384v2.967h7.491v-2.967c6.455-1.653 11.237-7.458 11.237-14.384zM27.219 53.055h-2.497m4.994-4.958h-7.491M25.971 1v4.958m24.97 19.83h-4.994M1 25.788h4.994m.551-19.281l5.299 5.26m33.547-5.26l-5.299 5.26"
            ></path>
        </svg>
    );
};

export default LightBulb;
