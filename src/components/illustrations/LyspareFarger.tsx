import * as React from "react";

const LyspareFarger: React.FC<{className?: string}> = ({className}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="62"
            viewBox="0 0 59 62"
            className={className}
        >
            <g
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path
                    fill="#FFBD66"
                    stroke="#FFBD66"
                    strokeWidth="3"
                    d="M46.601 29.58c0-9.402-7.625-17.022-17.021-17.022-9.402 0-17.022 7.62-17.022 17.022 0 7.926 5.427 14.57 12.766 16.463v3.395h8.511v-3.395c7.334-1.893 12.766-8.537 12.766-16.463z"
                />
                <path stroke="#000" d="M30.998 60.786h-2.837m5.674-5.674h-8.511"/>
                <path
                    stroke="#FFBD66"
                    strokeWidth="2"
                    d="M29.58 1.21v5.674M57.949 29.58h-5.674m-51.065 0h5.674M7.51 7.513l6.02 6.02m38.114-6.02l-6.02 6.02"
                />
            </g>
        </svg>
    )
};

export default LyspareFarger;
