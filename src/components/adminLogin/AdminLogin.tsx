import s from './adminLogin.module.scss'

function adminLogin() {
    return ( 
        <>
        <div className={s.form}>
            <input type="text" className={s.inp} />
            <input type="text" className={s.inp} />
            <button className={s.submit}>Отправить</button>
        </div>
        </>
     );
}

export default adminLogin;