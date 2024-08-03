import {
  BellIcon,
  CalendarIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import Image from 'next/image';

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    name: "Onchain Media",
    description: "Sync your NFT podcast to HyperCatcher.",
    href: process.env.HYPERCATCHER_LINK_CRYPTO,
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 overflow-hidden group">
        <div className="absolute inset-0 -top-10">
          <Image
            src="/on-chain-media.gif"
            alt="on chain media"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
            className="transition-all duration-300 transform blur-[2px] brightness-75 group-hover:blur-sm group-hover:brightness-50"
          />
        </div>
      </div>
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    lightText: true,
  },
  {
    Icon: InputIcon,
    name: "Farcaster Comments",
    description: "Share podcast recommendations and comments directly to Farcaster.",
    href: process.env.HYPERCATCHER_LINK_CRYPTO,
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 overflow-hidden group">
        <div className="absolute inset-0 -top-10">
          <Image
            src="/farcaster-comments.gif"
            alt="Full text search demo"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
            className="transition-all duration-300 transform blur-[2px] brightness-75 group-hover:blur-sm group-hover:brightness-50"
          />
        </div>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    lightText: true,
  },
  {
    Icon: GlobeIcon,
    name: "Unlock Local ML",
    description: "Uses the whisper model for local transcription",
    href: process.env.HYPERCATCHER_LINK_CRYPTO,
    cta: "Learn more",
    background: (
        <div className="absolute inset-0 overflow-hidden group">
          <div className="absolute inset-0 -top-10">
            <Image
              src="/whisper-logo.png"
              alt="Full text search demo"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
              className="transition-all duration-300 transform blur-[2px] brightness-75 group-hover:blur-sm group-hover:brightness-50"
            />
          </div>
        </div>
      ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Trending Podcast Suggestions",
    description: "Find the best new podcasts!",
    href: process.env.HYPERCATCHER_LINK_CRYPTO,
    cta: "Learn more",
    background: (
        <div className="absolute inset-0 overflow-hidden group">
          <div className="absolute inset-0 -top-10">
            <Image
              src="/trending-podcasts.gif"
              alt="Full text search demo"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
              className="transition-all duration-300 transform blur-[2px] brightness-75 group-hover:blur-sm group-hover:brightness-50"
            />
          </div>
        </div>
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    lightText: true,
  },
  {
    Icon: BellIcon,
    name: "Local First",
    description:
      "Find your transcripts and media in local storage for easy access anytime.",
    href: process.env.HYPERCATCHER_LINK_CRYPTO,
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 overflow-hidden group">
        <Image
          src="/transcripts-saved.jpg"
          alt="Transcripts demo"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          className="transition-all duration-300 transform blur-[2px] brightness-75 group-hover:blur-sm group-hover:brightness-50"
        />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    lightText: true,
  },
];

export function BentoDemoCrypto() {
  return (
    <BentoGrid className="lg:grid-rows-3">
    {features.map((feature) => (
      <BentoCard
        key={feature.name}
        {...feature}
        Icon={feature.Icon}
        lightText={feature.lightText || false}
        href={feature.href ?? ''}
      />
    ))}
  </BentoGrid>
  );
}