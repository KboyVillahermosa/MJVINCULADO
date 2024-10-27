import React from 'react'
import './Experience.css'
import {  Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import Lottie from 'lottie-react'
import animationData from './exp.json'


const Experience:React.FC = () => {
  return (
    <> 
    <section className='dark:bg-gray-800'>
       <div className="exp">
        <h1 className='dark:text-white uppercase'>Project Experience</h1>
       </div>
    <div className="timeline-header">
        <div className="timeline-content">
        <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>June – July 2024</Timeline.Time>
          <Timeline.Title>Leo Revita Salon - Trade Center Branch</Timeline.Title>
          <Timeline.Body>
           <p className='dark:text-white'>Assisted with various salon operations and customer service.</p>
           <p className='dark:text-white'>Provided technical support and contributed to daily administrative tasks.</p>
          </Timeline.Body>
  
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>Research Congress 2024</Timeline.Time>
          <Timeline.Title>3rd Place Best in Layout Poster</Timeline.Title>
          <Timeline.Body>
           <p className='dark:text-white'>Designed and developed a layout recognized for creativity and effectiveness.</p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>Filipino during DSPC December 2023</Timeline.Time>
          <Timeline.Title>2nd Place Online Publishing Feature Writer</Timeline.Title>
          <Timeline.Body>
            <p className='dark:text-white'>Awarded for exceptional feature writing skills in the online publishing category.</p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>6th Place Science Technology Writer</Timeline.Time>
          <Timeline.Title>Filipino during DSPC April 2023</Timeline.Title>
          <Timeline.Body>
            <p className='dark:text-white'>Recognized for excellence in science and technology writing.</p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
        </div>
        <div className="image-exp">
          <Lottie animationData={animationData}/>
        </div>
    </div>
    </section>
</>
  )
}

export default Experience