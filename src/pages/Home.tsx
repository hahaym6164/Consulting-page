import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Talking from "..//assets/pictures/talking.jpeg";
import Anxiety from "../assets/pictures/anxiety.jpeg";
import Anxiety1 from "../assets/pictures/anxiety1.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Consultant from "./components/Consultant/Consultant";
// import Modal from '@mui/material/Modal';
import CustomizedButtons from "./components/Button/Button";
import CopyModal from "./components/Modal/CopyModal";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: "#f1f1f1",
    },
  },
});
function Home() {
  const [open, setOpen] = useState(false);
  const copyNumber = () => {
    navigator.clipboard.writeText("text");
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="wrap">
          <div className="content">
            <div className="banner">
              <div
                className="banner-background"
                style={{ backgroundImage: `url(${Talking})` }}
              ></div>
              <div className="title text-wrap" style={{ margin: "20px" }}>
                <p className="text-1">我们拥抱你的心理 </p>
                <p className="text-2">专注于为你提供焦虑和抑郁情绪的最优解</p>
                <Button
                  onClick={copyNumber}
                  className="contact-btn"
                  variant="contained"
                >
                  现在咨询
                </Button>
                <CopyModal open={open} func={closeModal} />
              </div>
            </div>
            <div className="phone-number">预约热线：999-999-9999</div>
            <div className="symptons">
              <Carousel
                showStatus={false}
                showThumbs={false}
                showArrows={true}
                //  dynamicHeight={true}
              >
                <div
                  className=" sympton"
                  // style={{ backgroundImage: `url(${Anxiety})` }}
                >
                  <img src={Anxiety} alt="" />
                  <div className="text-wrap">
                    <h3>焦虑 Anxiety</h3>
                    <p>
                      情绪不安与恐惧，对日常很多事情过度担心，烦躁，睡眠问题等
                    </p>
                  </div>
                </div>
                <div
                  className=" sympton"
                  // style={{ backgroundImage: `url(${Anxiety1})` }}
                >
                  <img src={Anxiety1} alt="" />

                  <div className="text-wrap">
                    <h3> 抑郁 Depression</h3>
                    <p>
                      ​心情郁闷，情绪低落，厌恶活动，感到沮丧、绝望、或有自杀念头
                    </p>
                  </div>
                </div>
              </Carousel>
            </div>
            <div className="text">
              <h1>专业机构 一对一辅导</h1>
              <p>
                心理健康解决方案
                MTH的心理咨询提供心理健康相关的各种类别。全面的心理测试、深入的心理健康分类以及心理论坛
              </p>
            </div>
            <div className="text">
              <h2>咨询领域</h2>
              <p>
                青少年成长、亲子关系、人际关系、情绪关系、婚姻情感、焦虑、抑郁、成瘾行为、愤怒管理、青少年、自闭症、行为问题、职业规划、亲子关系、两性关系、家庭暴力、朋友关系、生活规划与转变、智力问题、创伤、自信、压力、失眠。
              </p>
            </div>
            <div className="consultants">
              <Consultant />
            </div>
          </div>
          <div className="footer">
            <p> 心理咨询服务有限公司</p>
          </div>

          <div className="contact-bar">
            <Button className="contact-btn" variant="outlined">
              <LocalPhoneOutlinedIcon />
              电话
            </Button>
            <Button
              onClick={copyNumber}
              className="contact-btn"
              variant="contained"
            >
              <i
                className="fa-brands fa-weixin"
                style={{ color: "#ffffff", fontSize: "16px", margin: "5px" }}
              ></i>
              微信
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Home;
