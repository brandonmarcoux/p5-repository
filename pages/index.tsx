"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type P5Sketch = {
  name: string;
  path: string;
  preview: string;
};

export default function Home() {
  const [sketches, setSketches] = useState<P5Sketch[]>([]);

  useEffect(() => {
    fetch("/manifest.json")
      .then((res) => res.json())
      .then((data: P5Sketch[]) => setSketches(data))
      .catch((err) => console.error("Failed to load sketches:", err));
  }, []);

  return (
    // <div className="flex flex-wrap min-h-screen">
    //   <div className="w-48">
    //     <p>abc</p>
    //   </div>
    //   <div className="bg-gray-700 p-4 w-48 max-w-xs">
    //     <img src="/sketches/circleHover/preview.png" alt="Example Image" className="w-48 h-32 object-cover" />
    //     <span className="mt-2 text-center text-white">Sample Text Below</span>
    //   </div>
    // </div>
    <div className="min-h-screen bg-purple-900">
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {sketches.map((sketch) => (
          <a
            key={sketch.path}
            href={sketch.path}
            className="flex flex-col items-center bg-gray-700 rounded-2xl shadow-lg p-4 hover:scale-105 hover:shadow-2xl transition-transform max-w-xs"
          >
            <Image
              src={sketch.preview}
              alt={sketch.name}
              width={300}
              height={200}
              className="object-cover"
            />
            <span className="mt-2 text-center w-full">{sketch.name}</span> {/* Use w-full on the span to take up available width */}
          </a>
        ))}
      </div>
    </div>
  );
}