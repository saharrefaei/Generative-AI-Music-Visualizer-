"use client";
import { useRef } from "react";
import { useState } from "react";

export default function Canvas(note) {
    const canvasref=useRef(null)
    const [color, setcolor] = useState([0,255,0]);
    const canvaswidth = 800 ;
    const canvasheight = 400
  return (
    <div>
      <p ref={canvasref}></p>
    </div>
  );
}
