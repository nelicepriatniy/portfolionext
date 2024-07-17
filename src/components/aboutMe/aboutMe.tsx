
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
async function AboutMeBlock(props: any) {
  return (
    <>
      <div className={s.aboutMeBlock}>
        <p className={s.text}>
          В 2018 году я начал увлекаться разработкой небольших приложений. На тот момент первой серьезной задачей стала разработка самописной системы авторизации.
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