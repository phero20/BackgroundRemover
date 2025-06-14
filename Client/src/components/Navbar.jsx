import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import AppContext from '../context/AppContext'

export default function Navbar() {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const { credit , loadCreditsData } = useContext(AppContext)

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link to="/">
        <img src={assets.logo} alt="LOGO" className="w-32 sm:w-44" />
      </Link>
      {isSignedIn ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full"
        >
          Get started
          <img src={assets.arrow_icon} alt="" className="w-3 sm:w-4" />
        </button>
      )}
    </div>
  );
}
