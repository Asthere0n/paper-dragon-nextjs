import SideMenu from "../SideMenu/SideMenu";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <header className="bg-red-600 w-[100%] h-24 flex justify-between items-center p-12">
      <Logo width={100} height={100} />
      <h2 className="font-bangers text-white text-5xl">Paper Dragon</h2>
      <SideMenu />
    </header>
  );
}