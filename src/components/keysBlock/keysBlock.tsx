import s from './keysBlock.module.scss'
import KeysItem from '../keysItem/keysItem'


// async function getData() {
//   const res = await fetch('https://wwwyacheslav.netlify.app/api/keys')
 
//   if (!res.ok) {
//     // throw new Error('Failed to fetch data')
//     console.log('something Wrong')
//   }
 
//   return res.json()
// }

export default async function KeysBlock() {
  // let keysList = await getData();
  return (
    <>
    <div className={s.keysBlock}>
      {/* {keysList.map((el: any) =>
        <KeysItem key={el.id} heading={el.heading} img={el.img} text={el.text} skillList={el.skillList} href={el.href} />
      )} */}
    </div>
    </>
  );
}