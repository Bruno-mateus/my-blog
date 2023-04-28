import React, { useEffect, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 290) {
      setVisible(true);
    } else if (scrolled <= 290) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      onClick={() => scrollToTop()}
      className="fixed z-10 bottom-6 right-4 md:bottom-8 md:right-20 bg-black animate-bounce text-gray-100  p-2 rounded-full text-1xl	"
      style={{ display: visible ? "inline" : "none" }}
    >
      <ArrowUp size={26} />
    </button>
  );
}
