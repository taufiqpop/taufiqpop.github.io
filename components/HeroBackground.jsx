import Image from "next/image";

import HeroSvg from "../public/assets/background/hero-wave.svg";

function HeroBackground() {
  return (
    <div className="absolute top-0 w-full h-[100svh] dark:bg-bgPrimaryDark bg-bgPrimaryLight">
      <div className="w-full h-[1503px] wave top-[-200px]">
        <Image
          src={"/assets/background/blur-layer.png"}
          alt="blur-layer"
          fill={true}
        />
      </div>
      <HeroSvg className="md:w-full w-full h-[1200px] wave md:top-[100dvh] md:left-0 top-[520px] dark:text-[#181826] text-[#4e2f84]" />
    </div>
  );
}

export default HeroBackground;
