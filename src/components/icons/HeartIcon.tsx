import React from "react";

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            height="24px"
            width="24px"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            {...props}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#080808"
                strokeWidth="18.432"
            >
                <path
                    fill="#ffffff"
                    d="M373.47 25.5c-33.475-.064-67.614 13.444-94.44 43.156l37.22 145.156-33.437.032 35.343 132.093-116.718-188.375 50.03 5.375L202.5 47.312C120.437-1.43 4.756 40.396 8.5 158.156c4.402 138.44 191.196 184.6 247.406 331.625 59.376-147.035 251.26-184.33 246.656-331.624-2.564-82.042-64.6-132.532-129.093-132.656z"
                ></path>
            </g>
            <g id="SVGRepo_iconCarrier">
                <path
                    fill="#ffffff"
                    d="M373.47 25.5c-33.475-.064-67.614 13.444-94.44 43.156l37.22 145.156-33.437.032 35.343 132.093-116.718-188.375 50.03 5.375L202.5 47.312C120.437-1.43 4.756 40.396 8.5 158.156c4.402 138.44 191.196 184.6 247.406 331.625 59.376-147.035 251.26-184.33 246.656-331.624-2.564-82.042-64.6-132.532-129.093-132.656z"
                ></path>
            </g>
        </svg>
    );
}

export default HeartIcon;