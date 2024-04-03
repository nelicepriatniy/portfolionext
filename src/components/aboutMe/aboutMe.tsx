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

function AboutMeBlock(props:any) {
  return ( 
    <>
    <div className={s.aboutMeBlock}>
        <p className={s.text}>
          Начиная с <span>2018</span>  года я начал увлекаться разработкой небольших приложений, в 17 лет я написал свою первую <span>систему авторизации</span>, что стало моей первой серьезной задачей.
        </p>
        <p className={s.text}>
          После небольшого опыта в разработке на <span>Python</span> , я пристрастился к созданию <span>веб интерфейсов</span>  и начиная с <span>2019</span>  года изучаю веб разработку большими и уверенными шагами.
        </p>
        <p className={s.listHeading}>Мои основные компетенции включают в себя:</p>
        <ul className={s.list}>
          {skillList.map((el:any) => 
            <li className={s.listItem} key={el.id}>{el.text}</li>
          )}
        </ul>
    </div>
    </>
   );
}

export default AboutMeBlock;