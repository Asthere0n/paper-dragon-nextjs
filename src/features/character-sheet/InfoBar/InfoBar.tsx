

export default function InfoBar() {
    
  return (
    <ul className="flex w-full flex-wrap justify-center gap-2 border-b-[3px] border-black bg-[#0975ff] px-2 py-2 text-white shadow-[0_3px_0_#111] sm:gap-3 sm:border-b-4 sm:px-4 sm:py-3 sm:shadow-[0_5px_0_#111]">
        <li className="border-[3px] border-black bg-[#ffd600] px-3 py-0.5 text-base uppercase tracking-widest text-black shadow-[3px_3px_0_#111] -rotate-1 sm:px-5 sm:py-1 sm:text-xl sm:shadow-[4px_4px_0_#111]">Name</li>
        <li className="border-[3px] border-black bg-white px-3 py-0.5 text-base uppercase tracking-widest text-black shadow-[3px_3px_0_#111] rotate-1 sm:px-5 sm:py-1 sm:text-xl sm:shadow-[4px_4px_0_#111]">Ancestry</li>
        <li className="border-[3px] border-black bg-[#f52a2a] px-3 py-0.5 text-base uppercase tracking-widest text-white shadow-[3px_3px_0_#111] -rotate-1 sm:px-5 sm:py-1 sm:text-xl sm:shadow-[4px_4px_0_#111]">Background</li>
    </ul>
  )
}
