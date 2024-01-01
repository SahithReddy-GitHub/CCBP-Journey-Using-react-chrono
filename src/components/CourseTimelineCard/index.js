import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseData} = props
  const {courseTitle, description, duration, tagsList} = courseData

  return (
    <div className="course-card">
      <div className="main-con">
        <h1 className="cou-head">{courseTitle}</h1>
        <div className="duration-card">
          <AiFillClockCircle />
          <p className="duration-para">{duration}</p>
        </div>
      </div>
      <p className="cou-para">{description}</p>
      <ul>
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="list-item">
            <p>{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
