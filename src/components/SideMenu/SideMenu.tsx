import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import SideMenuContent from "./SideMenuContent"
import HamburguerIcon from "../icons/HamburguerIcon"

import React from 'react'

export default function SideMenu() {
    return (<>
        <Sheet>
            <SheetTrigger asChild>
                <button><HamburguerIcon width={48} height={48} /></button>
            </SheetTrigger>
            <SheetContent>
                <SideMenuContent />
            </SheetContent>
        </Sheet>
    </>
    )
}


