import React from 'react'

interface Feature {
  title: string
  description: string
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      title: "AI Powered Transcripts for Every Podcast",
      description: "HyperCatcher can transcribe every podcast you listen to (on device) in the background and save the transcript for searching or reference",
    },
    {
      title: "Deep insights into every podcast",
      description: "Follow along with your podcast references in the live context browser or view the links later in your activity feed",
    },
    {
      title: "Take notes with context links",
      description: "Grab a snippet of any podcast at any time with a note including the last 30 seconds of transcript text and a link back to the exact spot in the podcast",
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