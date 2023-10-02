import React from "react";

import { Slider } from "@mui/material";

export default function TurnOptions() {
  return (
    <div className="w-full h-[10%] flex justify-center gap-3 items-center text-white absolute bottom-0 bg-[#0c2748]">
      <div className="w-1/3">
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </div>
      <button className="flex justify-center items-center px-3 py-2 border rounded-lg bg-[#eec23e] text-black active:scale-95">
        100
      </button>
      <button className="flex justify-center items-center px-3 py-2 border rounded-lg bg-[#eec23e] text-black active:scale-95">
        Fold
      </button>
      <button className="flex justify-center items-center px-3 py-2 border rounded-lg bg-[#eec23e] text-black active:scale-95">
        Call 800
      </button>
      <button className="flex justify-center items-center px-3 py-2 border rounded-lg bg-[#eec23e] text-black active:scale-95">
        Raise to 1600
      </button>
    </div>
  );
}
