import React from 'react'
import BlurIn from "@/components/magicui/blur-in";
import ShinyButton from "@/components/magicui/shiny-button";

const Hero: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <BlurIn
          word="Unleash Your Podcasts"
          className="text-4xl font-bold text-black dark:text-white mb-8"
        />
        <a href={process.env.HYPERCATCHER_LINK_CRYPTO} target="_blank" rel="noopener noreferrer">
          <ShinyButton 
            text="Get Started" 
            className="mt-6 text-lg px-8 py-3"
          />
        </a>
      </div>
    </section>
  )
}

export default Hero