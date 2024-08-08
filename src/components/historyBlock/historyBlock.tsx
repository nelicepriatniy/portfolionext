import HistoryItem from '../HistoryItem/HistoryItem';
import s from './historyBlock.module.scss'

const historyItems = [
  {
    id: 0,
    year: '2024',
    heading: 'Developing yourself as a developer',
    text: 'Creating a portfolio, promoting yourself as a developer, creating full-scale web applications. In-depth study of frameworks and tools to improve the quality of web applications and sites created by me.'
  },
  {
    id: 1,
    year: '2023',
    heading: 'Continuing to study React',
    text: 'He continued to study the framework and began to study the next step - server components and SEO promotion of websites and web applications. Completed the first international project built entirely on the React + Next bundle.'
  },
  {
    id: 2,
    year: '2022',
    heading: 'I started studying React',
    text: 'Wordpress was behind, many projects were completed on this engine with the construction of custom themes, without using templates, building convenient content control panels for admins, I began to study React and Redux.'
  },
  {
    id: 3,
    year: '2021',
    heading: 'I continued to study Wordpress',
    text: 'I continued to build up my experience with Wordpress, studied all the plugins needed for development. He continued to gain experience in web design, began studying typescript, css and other tools for more comfortable and technological development.'
  },
  {
    id: 4,
    year: '2019-2021',
    heading: 'I started learning languages and Wordpress',
    text: 'I started studying web development in 2019, studied html, js, css, started learning wordpress in 2020, in the same year I started taking the first freelance orders, met the first web designers, copywriters and SEO workers.'
  },
]



export default async function HistoryBlock() {
  return ( 
    <>
    <div className={s.historyWraper}>
      {historyItems.map((el:any) => <HistoryItem key={el.id} year={el.year} heading={el.heading} text={el.text} />)}
    </div>
    </>
   );
}