import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const divStyle = {
  width: "100px",
  height: "100px",
  backgroundColor: "black",
};

const BouncingDiv = () => {
  const controls = useAnimation();

  const bounceAnimation = async () => {
    while (true) {
      await controls.start({
        y: [0, 20, 0],
        transition: bounceTransition,
      });
    }
  };

  useEffect(() => {
    bounceAnimation();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <motion.div
        style={divStyle}
        initial={{ y: 0 }}
        animate={controls}
      />
    </div>
  );
};

export default BouncingDiv;
