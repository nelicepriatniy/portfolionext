'use client'

import Link from 'next/link';
import Navigation from '../navigation/navigation.jsx';
import s from './frontBlock.module.scss'
import Image from 'next/image';
import telegramIcon from '../../../public/icons/telegram.svg'
import vkIcon from '../../../public/icons/vk.svg'
import whatsappIcon from '../../../public/icons/whatsapp.svg'
import { useState } from 'react';
import { getHeadingText, getSubHeadingText, getTextText } from '../adminDone/adminDone'


function FrontBlock(props) {
  const [headingValue, setHeadingValue] = useState(props.heading)
  const [subHeadingValue, setsubHeadingValue] = useState(props.subHeading)
  const [TextValue, setTextValue] = useState(props.text)

  const headingChange = (el) => {
    setHeadingValue(el.target.value)
    getHeadingText(el.target.value)
    
    // console.log(el.target.style);
    // el.target.style.height = 'auto' 
  }
  const subHeadingChange = (el) => {
    setsubHeadingValue(el.target.value)
    getSubHeadingText(el.target.value)
  }
  const textChange = (el) => {
    setTextValue(el.target.value)
    getTextText(el.target.value)
    el.target.style.height = 'auto' 
  }

  return (
    <div className={s.frontPage}>
      <textarea value={headingValue} onChange={headingChange} className={s.heading}></textarea>
      <textarea value={subHeadingValue} onChange={subHeadingChange} className={s.subHeading}></textarea>
      <textarea value={TextValue} onChange={textChange} className={s.text}></textarea>
      <Navigation />
      <div className={s.sety}>
        <Link href={'https://t.me/Nelicepriatni'} target='_blank' className={s.setiHref}>
          <Image src={telegramIcon} alt={'telegram icon'} width={35} height={35} className={s.setySvg} />
        </Link>
        <Link href={'https://vk.com/nelicepriatniy'} target='_blank' className={s.setiHref}>
          <Image src={vkIcon} alt={'vk icon'} width={35} height={35} className={s.setySvg} />
        </Link>
        <Link href={'https://wa.me/79616136857'} target='_blank' className={s.setiHref}>
          <Image src={whatsappIcon} alt={'whatsapp icon'} width={35} height={35} className={s.setySvg} />
        </Link>
      </div>
    </div>
  );
}

export default FrontBlock;