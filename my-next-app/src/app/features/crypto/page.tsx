import React from 'react'
import Layout from '@/components/sections/LayoutCrypto'
import { OrbitingCirclesDemo } from '@/components/sections/CryptoCircle'
import Features from '@/components/sections/FeaturesCrypto'
import { BentoDemoCrypto } from '@/components/sections/BentoDemoCrypto'
import Hero from '@/components/sections/HeroCrypto' 

const CryptoPage: React.FC = () => {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <OrbitingCirclesDemo />
        <Features />
        <BentoDemoCrypto />
      </main>
    </Layout>
  )
}

export default CryptoPage