
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
        In 2018, I started getting involved in developing small applications. At that time, the first serious task was to develop a self-written authorization system.
        </p>
        <p className={s.text}>
        After a little experience in <span>Python</span> development, I started creating <span>web interfaces</span>an web interfaces starting from <span>2019</span>, I will wait a year to improve my web developer skills wint steps.
        </p>
        <p className={s.listHeading}>My core competencies include:</p>
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