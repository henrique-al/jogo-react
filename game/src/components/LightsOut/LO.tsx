import React from 'react'
import Board from './Board'
import './LO.css'

const LightsOut = () => {
  return (
    <div className='container-lo'>
      <h1>Lights Out</h1>
      <Board size={5} on={0.25}/>
    </div>
  )
}

export default LightsOut