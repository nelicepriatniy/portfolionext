'use client'

import s from './navigation.module.scss'

import React from 'react';

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      classesFirst: [s.item, s.active].join(' '),
      classesSecond: [s.item].join(' '),
      classesThird: [s.item].join(' '),
    }
  }
  componentDidMount(){
      if (typeof window !== "undefined") {
        window.addEventListener('scroll', ()=>{
          this.mouseMouveVar()
        })
      }
  }
  mouseMouveVar(){
    if(window.scrollY > 1500) {
      this.setState({
        classesFirst: [s.item, s.active].join(' '),
        classesSecond: [s.item, s.active].join(' '),
        classesThird: [s.item, s.active].join(' '),
      })

    } else if(window.scrollY > 500) {
      this.setState({
        classesFirst: [s.item, s.active].join(' '),
        classesSecond: [s.item, s.active].join(' '),
        classesThird: [s.item].join(' '),
      })

    } else {
      this.setState({
        classesFirst: [s.item, s.active].join(' '),
        classesSecond: [s.item].join(' '),
        classesThird: [s.item].join(' '),
  
      })

    }


  }
  render(){
    return (
      <nav className={s.nav}>
        <li className={this.state.classesFirst}>Обо мне</li>
        <li className={this.state.classesSecond}>Опыт</li>
        <li className={this.state.classesThird}>Проекты</li>
      </nav>
    )
  }
}

export default Navigation;