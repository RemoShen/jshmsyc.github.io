import React from "react";
import "./Application.css";
export default function Application() {
  return (
    <div className="applicationContainer">
      <div className="applicationHeader">
        {/* <h1>Some interesting things</h1> */}
        <div className="leftSperator"></div>
        <ul className="ListTitle">
          <li className="listproject">
            Resume
            <a
              className="link"
              href="https://drive.google.com/file/d/1mikmXY3uiTFmO0NdksyOg8uXbC572zkx/view?usp=drive_link"
              target="_blank"
            >
              (Link)
            </a>
          </li>
          <li className="listproject">
            Transcript
            <ul>
              <li className="listproject">
                Undergraduated Transcript
                <a
                  className="link"
                  href="https://drive.google.com/file/d/1zYbmsAqT87q1wOo3FNK4fS_6pczt0ZkI/view?usp=drive_link"
                  target="_blank"
                >
                  (Link)
                </a>
              </li>
              <li className="listproject">
                Master's Transcript
                <a
                  className="link"
                  href="https://drive.google.com/file/d/1kDHsJhju6sTGFCQ2Kth--PNYNTBB7YVi/view?usp=drive_link"
                  target="_blank"
                >
                  (Link)
                </a>
              </li>
            </ul>
          </li>

          <li className="listproject">
            TOEFL
            <a
              className="link"
              href="https://drive.google.com/file/d/1yKF-HRGqCADLtbifOOmA6U3UgKYRErnS/view?usp=drive_link"
              target="_blank"
            >
              (Link)
            </a>
          </li>
          <li className="listproject">
            GRE
            <a
              className="link"
              href="https://drive.google.com/file/d/1WXnSsuRTQdqb19ue6FhtLLI-anaOBDit/view?usp=drive_link"
              target="_blank"
            >
              (Link)
            </a>
          </li>
          <li className="listproject">
            Writing Sample
            <a
              className="link"
              href="https://drive.google.com/file/d/1lvO-yqucZUKNxS6MuCE30HOY0UkUmb9b/view?usp=drive_link"
              target="_blank"
            >
              (Link)
            </a>
          </li>
        </ul>
      </div>
      <div className="applicationContent"></div>
    </div>
  );
}
