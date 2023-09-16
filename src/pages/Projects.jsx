import React from 'react'
import Project from '../components/project/Project'
import { projectList } from './../helpers/projectList'

import projectsImg1 from "./../img/projects/01.jpg";


const Projects = () => {

   
 
  return (
 
   <div className="container">
       <h2 className="title-1">Projects</h2>
       <ul className="projects">
        {projectList.map((project, index) => {
       return <Project key={index} title={project.title}  img={project.img} index={index} />;
})}

       </ul>
   </div>


  )
}

export default Projects
