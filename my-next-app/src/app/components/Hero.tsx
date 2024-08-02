import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Your Next Favorite Podcast</h1>
        <p className="text-xl mb-8">AI-powered podcast recommendations, smart summaries, and voice-activated controls.</p>
        <a href="#" className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Start Listening</a>
      </div>
    </section>
  )
}

export default Hero