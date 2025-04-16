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
            <SheetHeader>

                <SheetTitle>Edit profile</SheetTitle>

                <SheetDescription>
                    Make changes to your profile here. Click save when you&apos;re
                    done.
                </SheetDescription>
                
            </SheetHeader>
            <div className="grid flex-1 auto-rows-min gap-6 px-4">

            </div>
            <SheetFooter>
                <SheetClose asChild>
                    <Button variant="neutral">Close</Button>
                </SheetClose>
            </SheetFooter>
        </>
    )
}
