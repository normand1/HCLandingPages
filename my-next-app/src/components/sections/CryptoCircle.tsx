import OrbitingCircles from "@/components/magicui/orbiting-circles";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Podcasts + Crypto
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.hypercatcher />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.podcast />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={30}
        delay={0}
        reverse
      >
        <Icons.base />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={30}
        delay={10}
        reverse
      >
        <Icons.zora />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={30}
        delay={20}
        reverse
      >
        <Icons.farcaster />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  podcast: () => (
    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="podcast-2" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg">
      <line id="primary" x1="12" y1="13" x2="12" y2="21" style={{fill: 'none', stroke: 'rgb(0, 0, 0)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2}} />
      <path id="primary-2" data-name="primary" d="M5.64,18.36a9,9,0,1,1,12.72,0" style={{fill: 'none', stroke: 'rgb(0, 0, 0)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2}} />
      <path id="primary-3" data-name="primary" d="M15.54,15.54a5,5,0,1,0-7.08,0" style={{fill: 'none', stroke: 'rgb(0, 0, 0)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2}} />
      <line id="primary-upstroke" x1="11.95" y1="12" x2="12.05" y2="12" style={{fill: 'none', stroke: 'rgb(0, 0, 0)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2.5}} />
    </svg>
  ),
  zora: () => (
    <img src="/logos/zorb-small.png" alt="Zora" />
  ),
  farcaster: () => (
    <img src="/logos/farcaster-transparent-purple.svg" alt="Farcaster" />
  ),
  hypercatcher: () => (
    <img src="/logos/standAloneHyperCatcher.svg" alt="HyperCatcher" />
  ),
  base: () => (
    <img src="/logos/base-logo-in-blue.svg" alt="Base" />
  ),
};
