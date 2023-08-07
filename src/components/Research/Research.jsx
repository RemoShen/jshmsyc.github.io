import React from "react";
import "./Research.css";
import Project from "./Project/Project";
import Publication from "./Publication/Publication";
import cast from "./cast.png";
import anomaly from "./anomaly.png";
import selector from "./selector.png";
export default function Research() {
  const research = [
    {
      imageUrl: cast,
      title: "CAST2: Authoring Data-Driven Chart Animations",
      authors: ["Yuancheng Shen", "Bongshin Lee", "Yunhai Wang"],
      conference: "IEEE Transactions on Visualization and Computer Graphics",
      link: "./CAST/CAST.html",
    },
    {
      imageUrl: anomaly,
      title:
        "Anomaly Detection Algorithm for Network Device Configuration based on Configuration Statement Tree",
      authors: [
        "Yuancheng Shen",
        "Rui Ban",
        "Xin Chen",
        "Runduo Hua",
        "Yunhai Wang",
      ],
      conference: "Computer Science 2023",
      link: "./Anomaly/Anomaly.html",
    },
    {
      imageUrl: selector,
      title: "PenTouchSelector: Selecting Elements in SVG Charts",
      authors: [
        // "Yuancheng Shen",
        // "Rui Ban",
        // "Xin Chen",
        // "Runduo Hua",
        // "Yunhai Wang",
      ],
      conference: "Working paper",
      link: "",
    },
    {
      imageUrl: anomaly,
      title: "A Visual Grammar for Charting and Reverse Generation",
      authors: [
        // "Yuancheng Shen",
        // "Rui Ban",
        // "Xin Chen",
        // "Runduo Hua",
        // "Yunhai Wang",
      ],
      conference: "Working paper",
      link: "",
    },
  ];
  const projects = [
    // {
    //   imageUrl: cast,
    //   title: "CAST2: Authoring Data-Driven Chart Animations",
    //   authors: ["Yuancheng Shen", "Bongshin Lee", "Yunhai Wang"],
    //   Company: "China Unicom & Shandong University",
    //   link: "./CAST.html",
    // },
  ];
  return (
    <div className="researchContainer">
      <div className="researchHeader">
        <h1>Publications & Projects</h1>
        <div className="leftSperator"></div>
      </div>
      <div className="researchContent">
        {research.map((paper, index) => (
          <Publication key={"paper" + index} info={paper} />
        ))}
        {projects.map((project, index) => (
          <Project key={"project" + index} info={project} />
        ))}
      </div>
    </div>
  );
}
