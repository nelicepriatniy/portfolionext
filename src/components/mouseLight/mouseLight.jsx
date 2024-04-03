'use client'

import s from './mouseLight.module.scss'
import React from 'react';

class MouseLight extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mouseX: 0,
      mouseY: 0,
    }
  }
  componentDidMount(){
      if (typeof window !== "undefined") {
        window.addEventListener('mousemove', ()=>{
          this.mouseMouveVar()
        })
      }
  }
  mouseMouveVar(){
    this.setState({
      mouseX: event.clientX,
      mouseY: event.clientY,
    })
    // this.state.mouseX = event.clientX;
    // this.state.mouseY = event.clientY

  }
  render(){
    return (
      <div className={s.mouseThing} style={{left: this.state.mouseX + 'px', top: this.state.mouseY + 'px'}}></div>
    )
  }
}

export default MouseLight;