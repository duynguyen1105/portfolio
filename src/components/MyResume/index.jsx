import { Fade } from 'react-reveal'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { workExperience } from './content'
import './styles.scss'

const MyResume = () => {
  return (
    <div className="container content-container">
      <Fade top>
        <div className="my-resume">
          <h2>My resume</h2>
        </div>
      </Fade>

      <div className="experience">
        <div className="experience-part">Work experience</div>
        <VerticalTimeline lineColor="grey">
          {workExperience.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ boxShadow: 'none' }}
              icon={
                <div className="timeline-icon">
                  <img src={item.logo} alt="Icon" />
                </div>
              }
            >
              <h3 className="title">{item.title}</h3>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="company-name"
              >
                <p>{item.company}</p>
              </a>
              <p className="time">{`${item.startDate} - ${item.endDate}`}</p>
              <div className="description">{item.description}</div>
              {item.technology && (
                <div className="tech-skills">
                  <p>
                    <span>Technology: </span>
                    {item.technology}
                  </p>
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export { MyResume }
