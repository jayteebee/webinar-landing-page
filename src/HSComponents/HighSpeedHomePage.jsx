import React from 'react'
import HSHeader from './HSHeader'
import HSVideoComponent from './HSVideoComponent'
import HSIntroText from './HSIntroText'
import HSContentSection from './HSContentSection'
import HSForm from './HSForm'

import {CONTENT_SECTIONS_A, CONTENT_SECTIONS_B, VIDEOS} from "../HSComponents/HSContent"

const HighSpeedHomePage = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
    <HSHeader />
    <HSVideoComponent video={VIDEOS[0].video}  />
    <HSIntroText />
    <HSVideoComponent />

    {/** Mapping over the content objext to adjust props for content component */}
    {CONTENT_SECTIONS_A.map((content, index) => (
        <HSContentSection
        // key={index}
        id={content.id}
        title={content.title}
        video={content.video}
        header={content.header}
        sub_header={content.sub_header}
        />
    ))}

    <HSVideoComponent />
    {/** Mapping over the content objext to adjust props for content component */}
    {CONTENT_SECTIONS_B.map((content, index) => (
        <HSContentSection
        key={index}
        id={content.id}
        title={content.title}
        video={content.video}
        header={content.header}
        sub_header={content.sub_header}
        />
    ))}
    <HSForm />
    </div>
  )
}

export default HighSpeedHomePage
