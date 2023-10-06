import React from "react";

export default function TeamName({ team }: { team: string }) {
  return (
    <div className="w-full flex p-2 justify-start items-center font-bold">
      {team}
    </div>
  );
}
