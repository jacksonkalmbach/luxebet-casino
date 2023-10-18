import React from "react";
import { Link } from "react-router-dom";

export default function BuiltBy() {
  return (
    <>
      <div className="w-full p-2 flex flex-col justify-center items-center gap-2 md:flex-row">
        <div className="w-fit">
          Built by{" "}
          <Link
            to="https://www.linkedin.com/in/jacksonkalmbach/"
            className="font-bold underline"
            target="_blank"
          >
            jacksonkalmbach
          </Link>{" "}
          and{" "}
          <Link
            to="https://www.linkedin.com/in/parker-hagmaier-38b13717a/"
            className="font-bold underline"
            target="_blank"
          >
            phagmaier
          </Link>
          .
        </div>{" "}
        {/* <div className="w-fit">
            <span onClick={() => navigate("/contact")}> Contact Us.</span>
          </div> */}
        <div>Hosted on Vercel.</div>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:flex-row">
        <p>Source code available on GitHub: </p>
        <div className="mx-2 flex gap-1">
          <Link
            to="https://github.com/jacksonkalmbach/luxebet-casino"
            className="font-bold underline"
            target="_blank"
          >
            Frontend
          </Link>{" "}
          and{" "}
          <Link
            to="https://github.com/phagmaier/poker-game-with-ai"
            className="font-bold underline"
            target="_blank"
          >
            Backend
          </Link>
          <p>- contributions welcome.</p>
        </div>
      </div>
    </>
  );
}
