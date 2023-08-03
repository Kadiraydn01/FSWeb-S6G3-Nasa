import React from "react";
import Yazi from "./Yazi";

const Img = ({ data }) => {
  return (
    <div className="img-container">
      <img src={data.url} alt={data.title} />
      <Yazi text={data.explanation} />
    </div>
  );
};

export default Img;
