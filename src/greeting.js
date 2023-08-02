import { useEffect } from "react";

const Greeting = (props) => {
  useEffect(() => {}, []);

  useEffect(() => {});

  return <h1>Bu Fotoğrafın Çekilme Tarihi ... {props.date}</h1>;
};

export default Greeting;
