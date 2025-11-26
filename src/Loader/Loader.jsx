import React from "react";
import Lottie from "lottie-react";
import loader from "../assets/Sandy Loading.json"; 

const Loader = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    }}>
      <Lottie 
        animationData={loader}
        loop={true}
      />
    </div>
  );
};

export default Loader;
