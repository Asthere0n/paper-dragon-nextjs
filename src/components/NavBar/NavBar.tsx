"use client"; // Mark this as a Client Component

import type React from "react";

// Components
import Link from "next/link";
import CombatIcon from "../icons/CombatIcon";
import MagicIcon from "../icons/MagicIcon";
import TreasureIcon from "../icons/TreasureIcon";
import HeartIcon from "../icons/HeartIcon";
import SummaryIcon from "../icons/SummaryIcon";
import NotesIcon from "../icons/NotesIcon";

// Styles
import style from "./NavBar.module.css";

export default function NavBar({ selector }: { selector: (view: string) => void }) {
  const handleClick = (event: React.MouseEvent<HTMLLIElement>, view: string) => {
    const highlight = document.querySelector(`.${style.highlight}`) as HTMLElement;
    const item = event.currentTarget;
    highlight.style.setProperty(
      "left",
      `${item.offsetLeft + item.offsetWidth / 2 - highlight.offsetWidth / 2}px`
    );
    selector(view);
  };

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 w-full px-2 pb-[calc(env(safe-area-inset-bottom)+0.65rem)] pt-2 sm:sticky sm:px-0 sm:pb-4">
        <ul className={`${style.nav} relative mx-auto flex w-fit max-w-full items-center justify-center gap-3 rounded-[1.55rem] border-[3px] border-black bg-white px-3 py-2 text-black shadow-[4px_4px_0_#111] sm:gap-7 sm:rounded-[2rem] sm:border-4 sm:px-7 sm:py-3 sm:shadow-[7px_7px_0_#111]`}>
            <li onClick={(event) => handleClick(event, "Summary")} className={style.link}><Link href="#" aria-label="Summary"><SummaryIcon width={32} height={32}/></Link></li>
            <li onClick={(event) => handleClick(event, "Combat")} className={style.link}><Link href="#" aria-label="Combat"><CombatIcon width={32} height={32}/></Link></li>
            <li onClick={(event) => handleClick(event, "Abilities")} className={style.link}><Link href="#" aria-label="Abilities"><HeartIcon width={32} height={32}/></Link></li>
            <li onClick={(event) => handleClick(event, "Inventory")} className={style.link}><Link href="#" aria-label="Inventory"><TreasureIcon width={32} height={32}/></Link></li>
            <li onClick={(event) => handleClick(event, "Journal")} className={style.link}><Link href="#" aria-label="Journal"><NotesIcon width={32} height={32}/></Link></li>
            <li onClick={(event) => handleClick(event, "Magic")} className={style.link}><Link href="#" aria-label="Magic"><MagicIcon width={32} height={32}/></Link></li>
            <span className={`${style.highlight} h-10 w-10 rounded-xl border-[3px] border-black bg-[#ffd600] shadow-[3px_3px_0_#111] sm:h-12 sm:w-12 sm:rounded-2xl sm:border-4 sm:shadow-[4px_4px_0_#111]`}></span>
        </ul>
    </nav>
  );
}
