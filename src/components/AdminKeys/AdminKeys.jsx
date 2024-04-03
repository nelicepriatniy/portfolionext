'use client'
import { useState } from 'react';
import s from './AdminKeys.module.scss'

function AdminKeysBlock() {
  const [keysName, setKeyName] = useState('')
  const [keysText, setKeyText] = useState('')
  const [keysHref, setKeyHref] = useState('')

  const sendPostReq = async ()=>{
    const resp = await fetch('http://localhost:3000/api/keys', {
      method: 'POST',
      doby: JSON.stringify({
        id: 0,
        img: '',
        heading: 'heading',
        text: 'text',
        href: 'href',
        skillList: [
          'HTML',
          'CSS',
          'Js',
          'React',
          'Next',
          'Redux'
        ]

      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await resp.json()
    console.log(data)
  }

  return ( <>
  <input value={keysName} onChange={e => setKeyName(e.target.value)} className={s.input} type="text" placeholder='Название проекта'/>
  <input value={keysText} onChange={e => setKeyText(e.target.value)} className={s.input} type="text" placeholder='Текст проекта' />
  <input className={s.input} type="file" placeholder='Фото проекта' />
  <input value={keysHref} onChange={e => setKeyHref(e.target.value)} className={s.input} type="text" placeholder='ссылка проекта' />
  <button className={s.input} onClick={sendPostReq}>отправить</button>
  </> );
}

export default AdminKeysBlock;