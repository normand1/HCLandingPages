import React from 'react'
import Layout from '@/components/sections/Layout'
import { OrbitingCirclesDemo } from '../components/sections/AICircle'
import Features from '../components/sections/Features'
import { BentoDemo } from '../components/sections/BentoDemo'
import Hero from '../components/sections/Hero'

const Home: React.FC = () => {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <OrbitingCirclesDemo />
        <Features />
        <BentoDemo />
      </main>
    </Layout>
  )
}

export default Home