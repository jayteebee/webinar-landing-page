import React from 'react'

const HSContentSection = ({key, id, title, video, header, sub_header}) => {
  return (
    <div>
        <h1>{title}</h1>
        <h1> **** {video} video *****</h1>
        <h2>{header}</h2>
        <h3>{sub_header}</h3>
    </div>
  )
}

export default HSContentSection
