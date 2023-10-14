import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = (props) => {
    return (
        <>
            <button
                className={twMerge(
                    'bg-[#4D6B73] text-[#FFFEF2] text-2xl px-2 rounded-md font-semibold border border-black m-1 w-fit hover:bg-[#3d555c] hover:hfont-bold',
                    props.className,
                )}
                onClick={props.onClick}
            >
                {props.children}
            </button>
        </>
    );
};

export default Button;
