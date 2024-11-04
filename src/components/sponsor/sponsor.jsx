import s from './sponsor.module.scss'

function Sponsor(props) {
  return ( 
    <>
    <div className={s.sponsorBlock}>
      <p className={s.sponsorText}>
      You can contact me at <span>social.. the networks</span> listed on the site, I will respond in <span> within 30 minutes</span> from Mon. to Fri. <span>from 12:00 to 00:00</span> oscow time <br /><br />
      </p>
      {/* <p className={s.dolg}>
        Санин долг = 
        {' ' + props.dolg}
      </p> */}
    </div>
    </>
   );
}

export default Sponsor;