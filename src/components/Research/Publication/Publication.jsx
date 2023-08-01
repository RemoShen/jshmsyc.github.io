import React from 'react'
import "./Publication.css";
import Project from '../Project/Project';
export default function Publication() {
  return (
    <div class="publication-item">
    <div
      class="pubImg"
      // style='background-image: url("./papers/2021VIS-VizLinter.jpg");'
    ></div>
    <div class="pubInfo">
      <div class="pubTitle">
        VizLinter: A Linter and Fixer Framework for Data Visualization
      </div>
      <div class="pubAuthor">
        Qing Chen, <strong>Fuling Sun</strong>, Xinyue Xu, Zui Chen, Jiazhe
        Wang, Nan Cao
      </div>
      <div class="pubConf">VIS 2021</div>
      <div class="pubPDF">
        <a
          href="https://arxiv.org/pdf/2108.10299.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>{" "}
      </div>
    </div>
  </div>
  )
}
