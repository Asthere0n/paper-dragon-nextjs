"use client"; // Mark this as a Client Component

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

export default function NavBar() {
  const handleClick = (index: number) => {
    const highlight = document.querySelector(`.${style.highlight}`) as HTMLElement;
    highlight.style.setProperty("left", `${index * 60 + 20}px`); // Adjust multiplier as needed
  };

  return (
    <nav>
        <ul className={`${style.nav} relative flex items-center gap-7 mb-5 bg-gray-800 p-3 text-white rounded-3xl px-7`}>
            <li onClick={() => handleClick(0)} className={style.link}><Link href="#"><SummaryIcon width={32} height={32}/></Link></li>
            <li onClick={() => handleClick(1)} className={style.link}><Link href="#"><CombatIcon width={32} height={32}/></Link></li>
            <li onClick={() => handleClick(2)} className={style.link}><Link href="#"><TreasureIcon width={32} height={32}/></Link></li>
            <li onClick={() => handleClick(3)} className={style.link}><Link href="#"><HeartIcon width={32} height={32}/></Link></li>
            <li onClick={() => handleClick(4)} className={style.link}><Link href="#"><NotesIcon width={32} height={32}/></Link></li>
            <li onClick={() => handleClick(5)} className={style.link}><Link href="#"><MagicIcon width={32} height={32}/></Link></li>
            <span className={`${style.highlight} w-12 h-12 bg-amber-400 rounded-2xl`}></span>
        </ul>
    </nav>
  );
}