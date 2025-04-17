import Brand from "./brand";
export default function SideBarIcon() {
  return (
    <div className="p-1 sm:p-2 md:p-3 lg:p-4 cursor-pointer hover:opacity-55 flex items-center gap-4 sm:gap-6 md:gap-10 lg:gap-12 transition-all duration-300">
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-11 lg:h-11"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          stroke="#535358"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8h15M5 16h22M5 24h22M5 11l3-3-3-3"
        ></path>
      </svg>
      <Brand />
    </div>
  );
}
