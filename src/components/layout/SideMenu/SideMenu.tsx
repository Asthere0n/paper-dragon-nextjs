import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import SideMenuContent from "./SideMenuContent"
import HamburguerIcon from "@/components/icons/HamburguerIcon"

import React from 'react'

export default function SideMenu() {
    return (<>
        <Sheet>
            <SheetTrigger asChild>
                <button className="rounded-lg border-[3px] border-black bg-white p-1.5 text-black shadow-[3px_3px_0_#111] transition-transform hover:-translate-y-0.5 hover:rotate-3 active:translate-y-1 active:shadow-[1px_1px_0_#111]"><HamburguerIcon width={30} height={30} /></button>
            </SheetTrigger>
            <SheetContent className="w-[88vw] border-l-4 border-black bg-[#ffd600] shadow-[-6px_0_0_#111] sm:w-3/4 sm:border-l-[6px] sm:shadow-[-10px_0_0_#111]">
                <SideMenuContent />
            </SheetContent>
        </Sheet>
    </>
    )
}
