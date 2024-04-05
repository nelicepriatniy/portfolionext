import FrontForm from '../frontForm/frontForm';
import s from './sponsor.module.scss'

function Sponsor(props) {
  return ( 
    <>
    <div className={s.sponsorBlock}>
      <p className={s.sponsorText}>
        Вы можете связаться со мной в <span>соц. сетях</span> , указанных на сайте, я отвечу в <span>течении 30 минут</span>  с пн. по пт. <span>с 12:00 до 00:00</span> по мск <br /><br />
      </p>
                {/* <FrontForm /> */}
      <p className={s.dolg}>
        Санин долг = 
        {' ' + props.dolg}
      </p>
    </div>
    </>
   );
}

export default Sponsor;