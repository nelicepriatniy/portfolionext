import Link from 'next/link';
import Navigation from '../navigation/navigation.jsx';
import s from './frontBlock.module.scss'
import Image from 'next/image';
import telegramIcon from '../../../public/icons/telegram.svg'
import vkIcon from '../../../public/icons/vk.svg'
import whatsappIcon from '../../../public/icons/whatsapp.svg'


async function FrontBlock() {
  // const texts = await getData();
  return (
    <div className={s.frontPage}>
      <h2 className={s.heading}>Slava Polyakov</h2>
      <h1 className={s.subHeading}>I create a pixel-perfect, engaging and accessible developer collaboration experience.</h1>
      <p className={s.text}>Senior Frontend Engineer</p>
      <Navigation />
      <div className={s.sety}>
        <Link href={'https://t.me/Nelicepriatni'} target='_blank' className={s.setiHref}>
          <Image src={telegramIcon} alt={'telegram icon'} width={35} height={35} className={s.setySvg} />
        </Link>
        <Link href={'https://vk.com/nelicepriatniy'} target='_blank' className={s.setiHref}>
          <Image src={vkIcon} alt={'vk icon'} width={35} height={35} className={s.setySvg}  />
        </Link>
        <Link href={'https://wa.me/79616136857'} target='_blank' className={s.setiHref}>
          <Image src={whatsappIcon} alt={'whatsapp icon'} width={35} height={35} className={s.setySvg}  />
        </Link>
      </div>
    </div>
  );
}

export default FrontBlock;