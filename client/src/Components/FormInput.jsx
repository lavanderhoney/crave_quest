import React from 'react'

function FormInput(props) {
    return (
        <div className='m-3'>
            { /* <label className='p-2'>{props.label}</label>*/}
            <input className='p-[15px]' type='text' placeholder={props.label} />
        </div>
    )
}

export default FormInput
