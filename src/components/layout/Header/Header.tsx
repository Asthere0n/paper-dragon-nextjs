import SideMenu from "../SideMenu/SideMenu";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <header className="relative w-full overflow-hidden border-b-[3px] border-black bg-[#f52a2a] px-2.5 py-1.5 shadow-[0_3px_0_#111] sm:border-b-4 sm:px-6 sm:py-2 sm:shadow-[0_4px_0_#111]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.32)_1px,transparent_0)] bg-[length:10px_10px]" />
      <div className="relative mx-auto flex w-full max-w-[1500px] items-center justify-between gap-2 sm:gap-3">
        <div className="rounded-full border-[3px] border-black bg-white p-0.5 shadow-[2px_2px_0_#111] rotate-[-4deg] sm:shadow-[3px_3px_0_#111]">
          <Logo width={38} height={38} />
        </div>
        <div className="relative border-[3px] border-black bg-[#ffd600] px-3 py-0.5 shadow-[3px_3px_0_#111] -skew-x-6 sm:px-7 sm:py-1 sm:shadow-[4px_4px_0_#111]">
          <h2 className="font-bangers text-[clamp(1.55rem,8vw,2rem)] uppercase tracking-[0.08em] text-[#111] drop-shadow-[2px_2px_0_#fff] skew-x-6 sm:text-4xl sm:tracking-[0.1em]">Paper Dragon</h2>
        </div>
        <SideMenu />
      </div>
    </header>
  );
}
