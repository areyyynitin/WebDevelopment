import React from 'react';

 const Button = ({
    disabled,
    children,
    onClick,
    variant
}) => {

    return (
        <span onClick={onClick} className={`rounded-2xl text-4xl px-32 py-8 text-white cursor-pointer ${disabled ? "bg-blue-200" : "bg-green-500"} `}>
            {children}
        </span>
    );
}

export default Button;
