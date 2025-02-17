"use client";
import { useState } from "react";
import Canvas from './canvas'

const scale = ['C', 'C#', 'E', 'E#', 'D', 'F', 'G'];

export default function Notes() {
  const [detectedNote, setDetectedNote] = useState('C');

  return (
    <div>
      <p>The note is: {detectedNote}</p>
      <Canvas/>
    </div>
  );
}
