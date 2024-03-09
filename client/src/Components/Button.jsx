import React from 'react'

export default function Button(props) {
    const bgColor = props.bgColor;
    const textColor = props.textColor;
    //bg-white text-red-500
    const btnClass = `w-[211px] h-[60px] border-[1px] ${bgColor} rounded-full ${textColor}`;
    return (
        <>
            <button className={btnClass}>
                {props.text}
            </button>
        </>
    )
}
