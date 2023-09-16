import React from 'react'
import BtnGit from '../components/btnGit/BtnGit'

import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/projectList'

const ProjectsPage = () => {

  const {id} = useParams();
  const project = projectList[id];
  
  return (
   <main className="section">
   <div className="container">
       <div className="project-details">

           <h1 className="title-1">{project.title}</h1>
          
           <img src={project.imgBig} alt={project.title} className="project-details__cover" />

           <div className="project-details__desc">
               <p>skills: {project.skills}</p>
           </div>

          {project.gitHubLink &&
           <BtnGit link={project.gitHubLink}  />
          }

           
         

       </div>
   </div>
</main>
  )
}

export default ProjectsPage
