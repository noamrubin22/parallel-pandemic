import React, { useRef, useEffect } from "react";
import p5 from "p5";

const P5Wrapper: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = new p5((p: p5) => {
      p.setup = () => {
        p.createCanvas(400, 400);
      };

      p.draw = () => {
        p.background(220);
        // your p5.js code here
      };
    });

    // Clean up the sketch on unmount
    return () => {
      sketch.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default P5Wrapper;
