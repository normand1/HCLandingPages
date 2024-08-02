import React from 'react'

interface Feature {
  title: string
  description: string
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      title: "AI-Powered Podcast Discovery",
      description: "Discover new podcasts tailored to your interests using our advanced AI recommendation system.",
    },
    {
      title: "Smart Episode Summaries",
      description: "Get AI-generated summaries of podcast episodes to quickly decide what to listen to next.",
    },
    {
      title: "Voice-Activated Controls",
      description: "Control your podcast playback hands-free with our AI voice recognition feature.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features