// src/components/CustomCursor.js
import React, { useState, useEffect } from "react";
import './Cursor.css';  // The CSS file we'll create in the next step


const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [smoothCursorPosition, setSmoothCursorPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        setCursorPosition({
          x: e.clientX + window.scrollX,
          y: e.clientY + window.scrollY,
        });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    // Use requestAnimationFrame for smoother updates
    useEffect(() => {
      const smoothMove = () => {
        setSmoothCursorPosition((prev) => {
          const lerp = (start, end, t = 0.3) => start + (end - start) * t; // Linear interpolation for smoothing
  
          const x = lerp(prev.x, cursorPosition.x);
          const y = lerp(prev.y, cursorPosition.y);
  
          return { x, y };
        });
  
        requestAnimationFrame(smoothMove);
      };
  
      smoothMove(); // Start the smooth animation
  
    }, [cursorPosition]);
  
    return (
      <div
        className="custom-cursor"
        style={{
          transform: `translate(-50%, -50%) translate(${smoothCursorPosition.x}px, ${smoothCursorPosition.y}px)`,
        }}
      />
    );
}

export default Cursor;
