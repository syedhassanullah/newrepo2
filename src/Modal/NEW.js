import React, { useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const NEW = () => {
  const [index, setIndex] = useState(0);

  // Scroll hook se scroll position ko track karein
  const { scrollYProgress } = useScroll();

  // Scroll position ko map karein content aur images ko change karne ke liye
  const scrollPosition = useTransform(scrollYProgress, [0, 1], [0, 4]);

  useEffect(() => {
    // Index ko update karein jab scroll position change ho
    scrollPosition.onChange((v) => {
      setIndex(Math.floor(v));
    });
  }, [scrollPosition]);

  // Content aur images ka array banayein
  const content = [
    "Content 1: Welcome to the first section.",
    "Content 2: Here is some more information.",
    "Content 3: Learn about the next topic.",
    "Content 4: See the details for this section.",
    "Content 5: Now you're almost there."
  ];

  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
    "https://via.placeholder.com/300x200?text=Image+4",
    "https://via.placeholder.com/300x200?text=Image+5"
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", overflowY: "scroll",backgroundColor:'yellow',color:'black'}}>
      <div style={{ display: "flex", justifyContent: "space-between", width: "80%", height: "500vh" }}>
        {/* Left Content */}
        <motion.div style={{ flex: 1, textAlign: "left", padding: "20px" }}>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2>{content[index]}</h2>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div style={{ flex: 1, textAlign: "right", padding: "20px" }}>
          <motion.img
            key={index}
            src={images[index]}
            alt={`Image ${index}`}
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NEW;
