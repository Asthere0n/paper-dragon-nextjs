import { Button } from "@/components/ui/button"
import {
    SheetClose,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

export default function SideMenuContent() {
    return (
        <>
            <SheetHeader className="border-b-4 border-black bg-white shadow-[0_5px_0_#111]">

                <SheetTitle className="font-bangers text-3xl uppercase tracking-widest text-[#f52a2a] drop-shadow-[2px_2px_0_#111] sm:text-4xl">Command Center</SheetTitle>

                <SheetDescription className="font-rajdhani text-base font-bold uppercase tracking-wide text-black sm:text-lg">
                    Tune your hero sheet, powers, inventory, and story beats.
                </SheetDescription>
                
            </SheetHeader>
            <div className="grid flex-1 auto-rows-min gap-4 px-4 py-6 font-rajdhani text-base font-bold sm:text-lg">
                <div className="border-[3px] border-black bg-[#0975ff] p-3 text-white shadow-[4px_4px_0_#111] -rotate-1 sm:border-4 sm:p-4 sm:shadow-[5px_5px_0_#111]">New character tools coming soon.</div>
                <div className="border-[3px] border-black bg-white p-3 text-black shadow-[4px_4px_0_#111] rotate-1 sm:border-4 sm:p-4 sm:shadow-[5px_5px_0_#111]">Keep your dice ready.</div>
            </div>
            <SheetFooter>
                <SheetClose asChild>
                    <Button variant="neutral" className="min-h-11 border-[3px] border-black bg-[#f52a2a] font-bangers text-xl uppercase tracking-widest text-white shadow-[4px_4px_0_#111] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#111] sm:border-4 sm:text-2xl sm:shadow-[5px_5px_0_#111]">Close</Button>
                </SheetClose>
            </SheetFooter>
        </>
    )
}
