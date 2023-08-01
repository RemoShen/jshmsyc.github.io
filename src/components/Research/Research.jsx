import React from 'react'
import "./Research.css";
import Project from './Project/Project';
import Publication from './Publication/Publication';
export default function Research() {
  return (
    <div className="researchContainer">
    <div className="researchHeader">
      <h1>Projects & Publications</h1>
      <div className="leftSperator"></div>
    </div>
    <div className="researchContent">
      <Publication />
    </div>
  </div>
  )
}
