import s from './adminItem.module.scss'


function AdminItem(props: any) {
    let classes = [s.indicator].join(' ')
    if(props.info.isCheck) {
        classes = [s.indicator, s.cheched].join(' ')
    }
    return (
        <div className={s.container}>
            <div className={s.itemInfo}>
                <div className={s.item}>
                    <p className={s.itemHeading}>Как обращаться:</p>
                    <p className={s.itemText}>{props.info.name}</p>
                </div>
                <div className={s.item}>
                    <p className={s.itemHeading}>Как связаться:</p>
                    <p className={s.itemText}>{props.info.phone}</p>
                </div>
            </div>
            <div className={classes}></div>
        </div>
    );
}

export default AdminItem;