import React, { useEffect, useState } from "react";
import useIsMobile from "../../../hooks/useIsMobile";
import Transition from "./Transition";
import Sidebar from "./Sidebar";
import { MdOutlineMenu } from "react-icons/md";

export default function DashboardLayout({ children }) {
  const [showNav, setShowNav] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [isMobile]);

  return (
    <section className="bg-white min-h-screen">
      {!showNav && (
        <button
          className="absolute top-6 left-5"
          onClick={() => {
            setShowNav(true);
          }}
        >
          <MdOutlineMenu size={25} />
        </button>
      )}
      <Transition show={showNav}>
        <Sidebar setShowNav={setShowNav} />
      </Transition>
      <div className={`${showNav && !isMobile ? "pl-60" : ""}`}>
        <div className="bg-transparent overflow-hidden rounded-sm">
          {children}
        </div>
      </div>
    </section>
  );
}
