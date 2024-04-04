'use client'

import { useState} from "react";
import s from './frontForm.module.scss'
import React from "react";



let FrontForm = ()=>{
    const [nameValue, setNameValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')

    const nameValueChange = (e)=>{
        setNameValue(e.target.value)
    }
    const phoneValueChange = (e)=>{
        setPhoneValue(e.target.value)
    }

    const submitForm = async ()=>{
        if(nameValue != '' && phoneValue != '') {
            const res = await fetch('http://localhost:3000/api/listPeople',
            {
                method: 'POST',
                body: JSON.stringify({
                    name: nameValue,
                    phone: phoneValue,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )
            const data = await res.json()
            console.log(data)
            setNameValue('');
            setPhoneValue('');
            alert('Ваша заявка успешно отправлена')
            // nameValue = ''
            // phoneValue = ''

        } else {
            alert('заполните все поля')
        }
    }
    
    return (
        <>
            <div className={s.form}>
                <input type="text" value={nameValue} onChange={nameValueChange} className={s.input} placeholder="Как к Вам обращаться?" />
                <input type="text" value={phoneValue} onChange={phoneValueChange} className={s.input} placeholder="Как с Вами связаться? " />
                <button className={s.submit} onClick={submitForm}>Отправить</button>
            </div>
        </>
    );
}

export default FrontForm;