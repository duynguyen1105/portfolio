import './styles.scss'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import Icon from '../../assets/icon-instagram.svg'
import 'react-vertical-timeline-component/style.min.css'

const MyResume = () => {
  return (
    <div className="container content-container">
      <div className="my-resume">
        <h2>My resume</h2>
        {/* <img src={Icon} alt="icon" /> */}
      </div>
      <div className="content">
        <VerticalTimeline lineColor='grey'>
          <VerticalTimelineElement
            contentStyle={{ background: 'rgba(112, 107, 102, 0.53)' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(112, 107, 102, 0.53)' }}
            date="2011 - present"
            icon={<img src={Icon} alt="icon" />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: 'rgba(112, 107, 102, 0.53)' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(112, 107, 102, 0.53)' }}
            date="2011 - present"
            icon={<img src={Icon} alt="icon" />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: 'rgba(112, 107, 102, 0.53)' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(112, 107, 102, 0.53)' }}
            date="2011 - present"
            icon={<img src={Icon} alt="icon" />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: 'rgba(112, 107, 102, 0.53)' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(112, 107, 102, 0.53)' }}
            date="2011 - present"
            icon={<img src={Icon} alt="icon" />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: 'rgba(112, 107, 102, 0.53)' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(112, 107, 102, 0.53)' }}
            date="2011 - present"
            icon={<img src={Icon} alt="icon" />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
    
        </VerticalTimeline>
      </div>
    </div>
  )
}

export { MyResume }
