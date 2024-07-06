
import s from './aboutMe.module.scss'
let skillList = [
  {
    id: 0,
    text: '- HTML',
  },
  {
    id: 1,
    text: '- CSS (LASS, SASS, SCSS)',
  },
  {
    id: 2,
    text: '- JavaScript (TypeScript)',
  },
  {
    id: 3,
    text: '- React (Next.js)',
  },
  {
    id: 4,
    text: '- Redux',
  },
]

async function getData() {
  const res = await fetch('https://wwwyacheslav.netlify.app/api/about')
 
  if (!res.ok) {
    console.log('something Wrong')
  }
 
  return res.json()
}

async function AboutMeBlock(props: any) {
  const dataText = await getData();
  return (
    <>
      <div className={s.aboutMeBlock}>
        <p className={s.text}>
          {dataText[0].text}
        </p>
        <p className={s.text}>
          После небольшого опыта в разработке на <span>Python</span>, я занялся созданием <span>веб интерфейсов</span>  и, начиная с <span>2019</span>,  года прождолжаю совершенствовать свои навыки веб-разработчика большими и уверенными шагами.
        </p>
        <p className={s.listHeading}>Мои основные компетенции включают в себя:</p>
        <ul className={s.list}>
          {skillList.map((el: any) =>
            <li className={s.listItem} key={el.id}>{el.text}</li>
          )}
        </ul>
      </div>
    </>
  );
}

export default AboutMeBlock;