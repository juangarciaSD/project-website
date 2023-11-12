import React from "react";

const Button = (props: {
    className?: string,
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLDivElement>
}) => {
    return(
        <>
        <div className={`bg-accentColor px-4 rounded-3xl ml-2 text-white flex flex-col justify-center transition ease-in-out duration-200 hover:bg-hoverAccentColor hover:cursor-pointer ${props.className}`} onClick={props.onClick}>
            {props.children}
        </div>
        </>
    )
};

export default Button;