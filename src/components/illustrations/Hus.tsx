import * as React from "react";

const Hus: React.FC<{className?: string}> = ({className}) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="33"
            viewBox="0 0 40 33"
            className={className}
        >
            <g fill="#3E3832" fillRule="nonzero" stroke="none" strokeWidth="1">
                <path
                    d="M39.167 31.667H35v-15h4.167a.835.835 0 00.495-1.504L35 11.718V5a.834.834 0 00-.833-.833h-5a.834.834 0 00-.834.833v1.79L20.495.997a.83.83 0 00-.99 0L.338 15.163a.833.833 0 00.495 1.504H5v15H.833a.834.834 0 000 1.666h38.334a.834.834 0 000-1.666zM30 5.833h3.333v4.654L30 8.023v-2.19zm-10-3.13L36.637 15H3.363L20 2.703zM10 31.667V30h6.667v1.667H10zm5-3.334h-3.333v-6.666H15v6.666zm3.333 3.334v-2.5a.834.834 0 00-.833-.834h-.833v-7.5a.834.834 0 00-.834-.833h-5a.834.834 0 00-.833.833v7.5h-.833a.834.834 0 00-.834.834v2.5H6.667v-15h26.666v15h-15z"
                    transform="translate(0 -1) translate(0 .604)"
                />
                <path
                    d="M29.167 20h-8.334a.834.834 0 00-.833.833v5c0 .46.373.834.833.834h8.334c.46 0 .833-.374.833-.834v-5a.834.834 0 00-.833-.833zm-.834 5h-6.666v-3.333h6.666V25z"
                    transform="translate(0 -1) translate(0 .604)"
                />
            </g>
        </svg>
    );
};

export default Hus;
