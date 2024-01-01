import {Chrono} from 'react-chrono'

import './index.css'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="con">
      <div className="bg-custom">
        <h1 className="main-head">MY JOURNEY OF CCBP 4.0</h1>
        <div className="chrono-card">
          <Chrono
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
            theme={{
              primary: '#0967d2',
              secondary: '#ffffff',
              cardBgColor: ' #ffffff',
              cardForeColor: '#1e293b',
              titleColor: ' #0967d2',
            }}
          >
            {timelineItemsList.map(eachTimeline =>
              eachTimeline.categoryId === 'COURSE' ? (
                <CourseTimelineCard courseData={eachTimeline} />
              ) : (
                <ProjectTimelineCard projectData={eachTimeline} />
              ),
            )}
          </Chrono>
        </div>
      </div>
    </div>
  )
}

export default TimelineView
