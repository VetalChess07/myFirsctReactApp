import React from 'react'
import './btnGit.css'
import btnGitImg from './gitHub-black.svg'

const BtnGit = ({link}) => {
  return (
   <a href={link} target='_blank' rel='noreferrer' className="btn-outline">
      <img src={btnGitImg} alt="" />
      GitHub repo
   </a>
  )
}



export default BtnGit
