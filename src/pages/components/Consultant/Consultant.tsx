import React, { useEffect, useRef } from "react";
import Woman from "../../../assets/pictures/woman.jpg";
import "./Consultant.css";
import { Button } from "@mui/material";
import ReadMoreBtn from "./ReadMoreBtn";
import Home from "../../Home";

interface ConsultantProps{
    btnClick: Function
}

function Consultant(props: ConsultantProps) {
    const {btnClick} = props
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("intersecting");
      });
    },
    {
      rootMargin: "-100px",
    }
  );
  const ref = useRef(null);
  const ref1 = useRef(null);
  const refs = [ref, ref1];
  const handleClick = () =>{
    btnClick()
  }
  useEffect(() => {
    refs.forEach((i) => {
      if (i.current) {
        observer.observe(i.current);
      }
    });
  }, []);

  return (
    <div className="consultant">
      <div className="photo-intro" ref={ref1}>
        <div className="photo">
          <img src={Woman} alt="" />
        </div>
        <div className="intro">
          <h3>Maggie Ye</h3>
          <ul>
            <li>职业时间： 30年</li>
            <li>执照： CCC (加拿大注册心理咨询师）</li>
          </ul>
        </div>
      </div>
      <div className="sec-div" ref={ref}>
        <div className="focus-on">职业倾向</div>
        <div className="focus-on">抑郁焦虑</div>
        <div className="focus-on">性格分析</div>
      </div>
      <div className="third-div">
        <ReadMoreBtn
          text="建立在哲学基础之上，通过为求助者创造无条件支持与鼓励的氛围使患者能够深化自我认识、
        发现自我潜能并且回归本我。帮助当事人增强觉察能力和接触能力，通过觉察了解环境，了解自我，接纳自我，达到人格统整。"
        ></ReadMoreBtn>
      </div>
      <div className="forth-div">
        <Button onClick={handleClick} className="small-btn" variant="contained">
          立即咨询
        </Button>
      </div>
    </div>
  );
}

export default Consultant;
