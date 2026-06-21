"use client"; // Mark this as a Client Component

import type React from "react";
import { useLayoutEffect, useRef, useState } from "react";

// Components
import Link from "next/link";
import CombatIcon from "@/components/icons/CombatIcon";
import MagicIcon from "@/components/icons/MagicIcon";
import TreasureIcon from "@/components/icons/TreasureIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import SummaryIcon from "@/components/icons/SummaryIcon";
import NotesIcon from "@/components/icons/NotesIcon";

// Styles
import style from "./NavBar.module.css";

const navItems = [
  { view: "Summary", label: "Summary", Icon: SummaryIcon },
  { view: "Combat", label: "Combat", Icon: CombatIcon },
  { view: "Abilities", label: "Abilities", Icon: HeartIcon },
  { view: "Inventory", label: "Inventory", Icon: TreasureIcon },
  { view: "Journal", label: "Journal", Icon: NotesIcon },
  { view: "Magic", label: "Magic", Icon: MagicIcon },
]

export default function NavBar({ selector, activeView }: { selector: (view: string) => void; activeView: string }) {
  const navRef = useRef<HTMLUListElement>(null)
  const highlightRef = useRef<HTMLSpanElement>(null)
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({})
  const [highlightLeft, setHighlightLeft] = useState<number | null>(null)

  useLayoutEffect(() => {
    const updateHighlight = () => {
      const nav = navRef.current
      const item = itemRefs.current[activeView]
      const highlight = highlightRef.current

      if (!nav || !item || !highlight) {
        return
      }

      setHighlightLeft(item.offsetLeft + item.offsetWidth / 2 - highlight.offsetWidth / 2)
    }

    updateHighlight()
    window.addEventListener("resize", updateHighlight)

    return () => window.removeEventListener("resize", updateHighlight)
  }, [activeView])

  const handleClick = (event: React.MouseEvent<HTMLLIElement>, view: string) => {
    event.preventDefault()
    selector(view);
  };

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 w-full px-2 pb-[calc(env(safe-area-inset-bottom)+0.65rem)] pt-2 sm:sticky sm:px-0 sm:pb-4">
        <ul ref={navRef} className={`${style.nav} relative mx-auto flex w-fit max-w-full items-center justify-center gap-3 rounded-[1.55rem] border-[3px] border-black bg-purple-800 px-2 py-2 text-black shadow-[4px_4px_0_#111] sm:gap-7 sm:rounded-2xl sm:border-4 sm:px-4 sm:py-3 sm:shadow-[7px_7px_0_#111]`}>
            {navItems.map(({ view, label, Icon }) => (
              <li
                key={view}
                ref={(node) => {
                  itemRefs.current[view] = node
                }}
                onClick={(event) => handleClick(event, view)}
                className={style.link}
              >
                <Link href="#" aria-label={label} aria-current={activeView === view ? "page" : undefined}>
                  <Icon width={32} height={32}/>
                </Link>
              </li>
            ))}
            <span
              ref={highlightRef}
              className={`${style.highlight} h-10 w-10 rounded-xl border-[3px] border-black bg-[#ffd600] shadow-[3px_3px_0_#111] sm:h-12 sm:w-12 sm:rounded-2xl sm:border-4 sm:shadow-[4px_4px_0_#111]`}
              style={{ left: `${highlightLeft ?? 0}px`, visibility: highlightLeft === null ? "hidden" : "visible" }}
            ></span>
        </ul>
    </nav>
  );
}
