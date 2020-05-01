import React, { useEffect } from 'react'
import { useField } from '@unform/core'

export default function inde({ name }){
    const {fieldName, defaultValue, error, registerField} = useField(name);

    useEffect(() => {}, []);

    return (
        <input/>
    )
}
 