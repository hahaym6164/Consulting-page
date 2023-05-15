import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { Carousel } from "react-responsive-carousel";
import Background1 from "../assets/pictures/background1.jpeg";
import Background2 from "../assets/pictures/background2.jpeg";
import Background3 from "../assets/pictures/background3.jpeg";
import Background4 from "../assets/pictures/background4.jpeg";
import GreenBackground from "../assets/pictures/green-background.jpg";
import Avatar from "../assets/pictures/avatar.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Consultant from "./components/Consultant/Consultant";

import CopyModal from "./components/Modal/CopyModal";
import About from "./components/About/About";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: "#f1f1f1",
    },
    secondary: {
      main: "#f1f1f1",
    },
  },
});

function Home() {
  const [open, setOpen] = useState(false);
  const copyNumber = () => {
    navigator.clipboard.writeText("sycxl_yq");
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="wrap">
          <CopyModal open={open} func={closeModal} />

          <div className="content">
            <div className="banner">
              <div className="banner-background"></div>
              <div className="title text-wrap" style={{ margin: "20px" }}>
                <p className="text-1">
                  四叶草心理咨询 <img className="avatar" src={Avatar}></img>{" "}
                </p>
                <p className="text-2">专注于为你提供焦虑和抑郁情绪的最优解</p>
                <Button
                  onClick={copyNumber}
                  color="primary"
                  className="contact-btn"
                  variant="contained"
                >
                  现在咨询
                </Button>
              </div>
            </div>
            <div className="phone-number">预约热线：999-999-9999</div>
            <About />

            <div className="symptons">
              <Carousel showStatus={false} showThumbs={true} showArrows={true}>
                <div className="background">
                  <img src={Background1} alt="" />
                </div>
                <div className="background">
                  <img src={Background2} alt="" />
                </div>
                <div className="background">
                  <img src={Background3} alt="" />
                </div>
                <div className="background">
                  <img src={Background4} alt="" />
                </div>
              </Carousel>
            </div>

            <div className="text text-wrap">
              <h2>咨询领域</h2>
              <p>
                青少年成长、亲子关系、人际关系、情绪关系、婚姻情感、焦虑、抑郁、成瘾行为、愤怒管理、青少年、自闭症、行为问题、职业规划、亲子关系、两性关系、家庭暴力、朋友关系、生活规划与转变、智力问题、创伤、自信、压力、失眠。
              </p>
            </div>
            <div className="consultants">
              <Consultant btnClick={copyNumber} />
            </div>
          </div>
          {/* <div className="footer">
            <p> 心理咨询服务有限公司</p>
          </div> */}

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
