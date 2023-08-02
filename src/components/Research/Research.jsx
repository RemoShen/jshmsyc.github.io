import React from "react";
import "./Research.css";
import Project from "./Project/Project";
import Publication from "./Publication/Publication";
import puechase from "./purchase.png";
export default function Research() {
  const castPaper = {
    imageUrl: puechase,
    title: "CAST2: Authoring Data-Driven Chart Animations",
    authors: ["Yuancheng Shen", "Bongshin Lee", "Yunhai Wang"],
    conference: "IEEE Transactions on Visualization and Computer Graphics",
    link: "./CAST.html",
  };
  return (
    <div className="researchContainer">
      <div className="researchHeader">
        <h1>Projects & Publications</h1>
        <div className="leftSperator"></div>
      </div>
      <div className="researchContent">
        {/* <Publication info={castPaper} />
        <Publication info={castPaper} />
        <Publication info={castPaper} />
        <Publication info={castPaper} />
        <Publication info={castPaper} /> */}
      </div>
    </div>
  );
}
