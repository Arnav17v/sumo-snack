"use client";
import { useState } from "react";
import Reservation from "./reservation";
import Link from "next/link";

const Header = () => {
  const [res, setres] = useState(false);
  return (
    <div className=" thisbg p-4">
      <div className="flex max-w-[88rem] m-auto justify-between items-center">
        <Link href="./" className="text-xl ungai">
          🍣Sumo Snacks
        </Link>
        <div className="flex gap-2 items-center relative">
          <div
            className="relative cursor-pointer z-40"
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              document
                .getElementById("footer")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </div>
          <div
            className="p-3 border-white border-2 rounded-xl"
            onClick={() => {
              setres(true);
            }}
          >
            Make a reservation
          </div>
          <Reservation trigger={res} setTrigger={setres} />
        </div>
      </div>
    </div>
  );
};

export default Header;
