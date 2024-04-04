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
            const res = await fetch('https://wwwyacheslav.netlify.app/api/listPeople',
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
            setNameValue('');
            setPhoneValue('');
            alert('Ваша заявка успешно отправлена')

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