import Image from 'next/image';
import s from './keysItem.module.scss'
import Link from 'next/link';

function KeysItem(props: any) {
  return (
    <>
    <div className={s.item}>
      <a target="_blank" href={props.href} className={s.fullHref}></a>
      <Image src={props.img} alt={props.heading + ' icon'} className={s.img} />
      <div className={s.itemInfo}>
        <div className={s.itemHeading}>
          <h2 className={s.heaidng}>{props.heading}</h2>
          <svg className={s.itemSvg} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.36358 0H11.227H12.9997V1.1815L13 1.18179L12.9997 1.18208V1.77269L12.9997 10.6361H11.227V2.95477L1.1815 13.0003L0 11.8188L10.0461 1.77269H2.36358V0Z" fill="white" />
          </svg>
        </div>
        <h3 className={s.text}>{props.text}</h3>
        <div className={s.skillList}>
          {props.skillList.map((el: any) =>
            <div key={el.index} className={s.skillItem}>{el}</div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default KeysItem;