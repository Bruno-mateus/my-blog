import Link from "next/link";
import { ToggleTheme } from "../ToggleTheme";
import { LinkedinLogo } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className="w-full fixed px-2 top-0 pb-4 pt-4 md:pl-8 md:pr-8 bg-gray-950 dark:bg-black flex text-gray-100 justify-between items-center">
      <Link href={"/"}>
        <h2>{"<Bruno Mateus/>"}</h2>
      </Link>
      <div>
        <Link
          className="flex flex-row items-center"
          href={"https://www.linkedin.com/in/bruno-mateus-1215281a7/"}
          target="_blank"
        >
          <span>Linked</span>
          <LinkedinLogo size={25} />
        </Link>
      </div>

      <ToggleTheme />
    </header>
  );
}
