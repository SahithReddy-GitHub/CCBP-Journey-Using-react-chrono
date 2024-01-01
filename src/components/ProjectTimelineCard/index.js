import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectData} = props
  const {
    projectTitle,
    duration,
    description,
    imageUrl,
    projectUrl,
  } = projectData

  return (
    <div className="project-card">
      <img src={imageUrl} className="img" alt="project" />
      <div className="main-con">
        <h1 className="pro-head">{projectTitle}</h1>
        <div className="duration-card">
          <AiFillCalendar />
          <p className="duration-para">{duration}</p>
        </div>
      </div>
      <p className="pro-para">{description}</p>
      <a href={projectUrl} className="anchor-custom">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
