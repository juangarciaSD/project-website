import React from "react";

const Input = (props: {
    placeholder?: string,
    value: string,
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}) => {
    return(
        <>
        <input
            className="py-2 px-4 rounded-xl text-black outline-none"
            value={props.value} placeholder={props.placeholder} onKeyDown={props.onKeyDown} onChange={props.onChange} />
        </>
    )
};

export default Input;