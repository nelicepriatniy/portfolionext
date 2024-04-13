'use client'

import s from "./page.module.scss";
import FrontBlock from "@/components/frontBlock/frontBlockAdmin";
import AboutMeBlock from "@/components/aboutMe/aboutMe";
import HistoryBlock from "@/components/historyBlock/historyBlock";
import KeysBlock from "@/components/keysBlock/keysBlock";
import MouseLight from '@/components/mouseLight/mouseLight'
import Sponsor from '@/components/sponsor/sponsor'
import AdminDone from '@/components/adminDone/adminDone'

let dolg = {
    obsh: 25000,
    otdal: [
        120, //пожертвовал на хостинг
    ],
    ostDolg: 0,
}

dolg.ostDolg = dolg.obsh

for (let i = 0; dolg.otdal.length > i; i++) {
    dolg.ostDolg = dolg.ostDolg - dolg.otdal[i];
}



async function getData() {
    const res = await fetch('https://wwwyacheslav.netlify.app/api/allText')

    if (!res.ok) {
        console.log('something Wrong')
    }

    return res.json()
}

export default async function Admin() {
    const texts = await getData();
    // function sendData () {
    //     getHeadingText('texts[0].frontPageHeading');
    //     getSubHeadingText(texts[0].frontPageSubHeading);
    //     getTextText(texts[0].frontPageText);
    // }
    // sendData()
    return (
        <>
            <main>
                <section className={s.frontBlock}>
                    <div className={s.container + ' container'}>
                        <FrontBlock
                            heading={texts[0].frontPageHeading}
                            subHeading={texts[0].frontPageSubHeading}
                            text={texts[0].frontPageText}
                        />
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
            <AdminDone />

        </>
    );
}
