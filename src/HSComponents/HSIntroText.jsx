import React from 'react'
import {INTRO_TEXT} from "../HSComponents/HSContent"

const HSIntroText = () => {
  return (
    <div>
        <h3>{INTRO_TEXT.INTRO}</h3>
        <h1>{INTRO_TEXT.HEADER}</h1>
        <h2>{INTRO_TEXT.SUB_HEADER}</h2>
        <p>{INTRO_TEXT.P1}</p>
        <p>{INTRO_TEXT.P2}</p>
        <p>{INTRO_TEXT.P3}</p>
    </div>
  )
}

export default HSIntroText
