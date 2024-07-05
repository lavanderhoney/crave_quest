import React from 'react'

export default function Button(props) {
    const bgColor = props.bgColor;
    const textColor = props.textColor;
    //bg-white text-red-500
    const btnClass = `w-[150px] h-[55px] border-[1px] ${bgColor} rounded-full ${textColor}`;
    return (
        <>
            <button className={btnClass} onClick={props.onClick}>
                {props.text}
            </button>
        </>
    )
}
