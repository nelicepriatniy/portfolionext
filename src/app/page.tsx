import s from "./page.module.scss";
import FrontBlock from "@/components/frontBlock/frontBlock";
import AboutMeBlock from "@/components/aboutMe/aboutMe";
import HistoryBlock from "@/components/historyBlock/historyBlock";
import KeysBlock from "@/components/keysBlock/keysBlock";
import MouseLight from '@/components/mouseLight/mouseLight'
import Sponsor from '@/components/sponsor/sponsor'

let dolg = {
  obsh: 25000,
  otdal: [
    120, //пожертвовал на хостинг
    4000,
    6000,
    14880
  ],
  ostDolg: 0,
}

dolg.ostDolg = dolg.obsh

for(let i = 0; dolg.otdal.length > i; i++) {
  dolg.ostDolg = dolg.ostDolg - dolg.otdal[i];
}




export default function Page() {
  return (
      <main>
        <section className={s.frontBlock}>
          <div className={s.container + ' container'}>
            <FrontBlock />
            <div className={s.aboutMeBlock}>
              <div className={s.Wraper}>
                <AboutMeBlock />
                <HistoryBlock />
                <KeysBlock />
                <Sponsor dolg={dolg.ostDolg} />
              </div>
            </div>
          </div>
        </section>
        <div className={s.mainBg}></div>
        <MouseLight mouse={123} />
        
      </main>
  );
}
