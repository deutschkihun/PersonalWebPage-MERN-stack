import React from 'react'
import '../../../projectdetail.css'
import projects from '../../../data'

function ProjectPageDetail(props) {

    const projectid = props.match.params.projectid    
    const currentProject = projects.filter((project) => project.id === parseInt(projectid))
    
    return (
       <section className='project-section'>
            <br/><br/><br/><br/>
            <h2 className="section-title">{currentProject[0].title}</h2>
            <div className="project">
                <img src={currentProject[0].img} alt="profile" style={{width:"300px",height:"200px"}}/>
                <div className="project-info">
                    <p>
                        <span className='proejct-data'>Project name: </span> {currentProject[0].title}
                    </p>

                    <p>
                        <span className='proejct-data'>Stack: </span> {currentProject[0].stack}
                    </p>

                    <p>
                        <span className='proejct-data'>Completion: </span> {currentProject[0].completion}
                    </p>

                    <p>
                        <span className='proejct-data'>Description: </span> {currentProject[0].desc}
                    </p>
                   <a href={currentProject[0].link} target='_blank' rel="noopener noreferrer" className='btn-primary'>More details</a>
                </div>
            </div>
        </section> 
    )
}
export default ProjectPageDetail
