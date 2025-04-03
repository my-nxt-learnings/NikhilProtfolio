import React from 'react'
import {Chrono} from 'react-chrono'

const EducationTimeline = () => {
  const educationData = [
    {
      title: '2024',
      cardTitle: 'Full Stack Development Certification',
      cardSubtitle: 'NxtWave Institute',
      cardDetailedText:
        'Completed intensive hands-on training in full-stack web development, covering front-end and back-end technologies.',
    },
    {
      title: '2022',
      cardTitle: 'Bachelor of Technology(B.Tech)',
      cardSubtitle: 'JNTU Kakinada',
    },
    {
      title: '2018',
      cardTitle: 'Intermediate',
      cardSubtitle: 'Sri Chaitanya Junior College',
    },
    {
      title: '2016',
      cardTitle: 'SSC',
      cardSubtitle: 'St.Claret EM High School',
    },
  ]

  return (
    <div style={{width: '100%', height: '500px'}}>
      <Chrono
        items={educationData}
        mode="HORIZONTAL"
        hideControls
        theme={{
          primary: '#0967d2',
          secondary: '#ffffff',
          cardBgColor: '#f5f5f5',
          titleColor: '#0967d2',
          titleColorActive: '#ff5733',
        }}
        scrollable={{scrollbar: true}}
      />
    </div>
  )
}

export default EducationTimeline
