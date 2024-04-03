import s from './HistoryItem.module.scss'

function HistoryItem(props:any) {
  return ( 
    <div className={s.item}>
      <p className={s.year}>{props.year}</p>
      <div className={s.itemInfo}>
        <h2 className={s.heading}>{props.heading}</h2>
        <p className={s.text}>{props.text}</p>
      </div>
    </div>
   );
}

export default HistoryItem;