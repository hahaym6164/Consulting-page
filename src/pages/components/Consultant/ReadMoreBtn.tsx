import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
interface ReadmoreBtnProps {
  text: string;
}

function ReadMoreBtn(props: ReadmoreBtnProps) {
  const { text } = props;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <div style={{ textAlign: "left" }}>
        {isReadMore ? text.slice(0, 50) + "..." : text}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {isReadMore ? <Button onClick={toggleReadMore}>Read more</Button> : " "}
      </div>
    </>
  );
}

export default ReadMoreBtn;
