'use client'

import s from './adminDone.module.scss'
import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/router';


let frontHeading = '',
    frontSubHeading = '',
    frontText = '';


function AdminDone() {
    const router = useRouter()
    const sendAllTexts = async () =>{
        const req = await fetch('https://wwwyacheslav.netlify.app/api/allText', {
            method: 'POST',
            body: JSON.stringify({
                frontPageHeading: frontHeading,
                frontPageSubHeading: frontSubHeading,
                frontPageText: frontText
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // router.refresh()
        // window.location.reload();
        // alert('изменения внесены')
    }
    return ( 
        <>
        <div className={s.doneBlock} onClick={sendAllTexts}>
            Готово
        </div>
        </>
     );
}


export function getHeadingText(text){
    frontHeading = text;
    return text
}
export function getSubHeadingText(text){
    frontSubHeading = text;
    return text
}
export function getTextText(text){
    frontText = text;
    return text
}



export default AdminDone;