import React from 'react'
import './Light.css'

type Props = {
  cellIndex: string,
  isOn: boolean,
  changeLight: any
}

const Light = ({cellIndex, isOn, changeLight}: Props) => {
  const handleClick = () => {
    console.log(changeLight)
    changeLight(cellIndex)
  }
  return (
    <button className={`light ${isOn? "on":"off"}`} onClick={() => handleClick()}></button>
  )
}

export default Light