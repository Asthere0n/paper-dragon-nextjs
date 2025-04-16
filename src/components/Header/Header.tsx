import SideMenu from "../SideMenu/SideMenu"
import Logo from "../icons/Logo"


export default function Header() {
    return (
        <header className="bg-red-600 w-[100%] h-24 flex justify-between  items-center p-12">
            <Logo width={80} height={80}/>
            <h2 className="text-white text-5xl">Paper Dragon</h2>
            <SideMenu/>
        </header>
    )
}