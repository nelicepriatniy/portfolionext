import HistoryItem from '../HistoryItem/HistoryItem';
import s from './historyBlock.module.scss'

const historyItems = [
  {
    id: 0,
    year: '2024',
    heading: 'Развитие себя как разработчика',
    text: 'Создание портфолио, продвижение себя как разработчика, создание полномасштабных веб приложений. Углубленное изучение фреймворков и инструментов, позволяющих улучшить качество веб приложений и сайтов, созданных мной.'
  },
  {
    id: 1,
    year: '2023',
    heading: 'Продолжение изучение React',
    text: 'Продолжил изучение фреймворка и начал изучать следующую ступень - серверные компоненты и сео продвижение сайтов и веб. приложений. Выполнил первый межязычный проект, полностью построенный на связке React + Next.'
  },
  {
    id: 2,
    year: '2022',
    heading: 'Начал изучение React',
    text: 'Wordpress был позади, выполнено много проектов на этом движке с построением кастомных тем, не используюя шаблоны, строя удобные панели управления контентом для админов, начал изучать React и Redux.'
  },
  {
    id: 3,
    year: '2021',
    heading: 'Продолжил изучение Wordpress',
    text: 'Продолжил нарасщивать опыт работы с Wordpress, изучил все плагины, нужные для разработки. Увеличивал опыт веб дизайна, Начал изучение typescript, scss и других инструментов для более комфортной и технологичной '
  },
  {
    id: 4,
    year: '2019-2021',
    heading: 'Начал учить языки и Wordpress',
    text: 'Начал изучать Веб разработку в 2019, изучил языки html, js, css, начал учить wordpress в 2020, в этом же году начал брать первые заказы на фрилансе, познакомился с первыми веб дизайнерами, копирайтерами и сео работниками.'
  },
]


async function getData() {
  const res = await fetch('https://wwwyacheslav.netlify.app/api/histoy')
 
  if (!res.ok) {
    // throw new Error('Failed to fetch data')
    console.log('something Wrong')
  }
  // console.log(res)
  return res.json()
}

export default async function HistoryBlock() {
  // let historyList = await getData();
  return ( 
    <>
    <div className={s.historyWraper}>
      {historyItems.map((el:any) => <HistoryItem key={el.id} year={el.year} heading={el.heading} text={el.text} />)}
    </div>
    </>
   );
}

// export default HistoryBlock;