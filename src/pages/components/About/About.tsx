import React from "react";
import "./About.css";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import BedtimeIcon from '@mui/icons-material/Bedtime';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StarIcon from '@mui/icons-material/Star';

function About() {
  return (
    <div className="about">
      <div className="text-wrap about-desc">
        <div className="wrapper">
          <div className="icon">
            <AccessibilityIcon />
          </div>
          <h3> 便捷性</h3>
        </div>

        <div className="wrapper">随时随地得到专业的心理帮助</div>
      </div>
      <div className="text-wrap about-desc">
        <div className="wrapper">
          <div className="icon">
            <AutoAwesomeIcon />
          </div>
          <h3> 多样性</h3>
        </div>

        <div className="wrapper">认知行为疗法、情绪焦点治疗等</div>
      </div>
      <div className="text-wrap about-desc">
        <div className="wrapper">
          <div className="icon">
            <BedtimeIcon />
          </div>
          <h3> 私密性</h3>
        </div>

        <div className="wrapper">在加密空间中一对一交流</div>
      </div>
      <div className="text-wrap about-desc">
        <div className="wrapper">
          <div className="icon">
            <StarIcon />
          </div>
          <h3> 灵活性</h3>
        </div>

        <div className="wrapper">根据您需求及偏好，多种方式进行</div>
      </div>
    </div>
  );
}

export default About;
