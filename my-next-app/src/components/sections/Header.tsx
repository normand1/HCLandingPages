import React from 'react'
import Link from 'next/link'
import PulsatingButton from "@/components/ui/pulsating-button";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          HyperCatcher
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900">AI</Link>
          <Link href="/features/crypto" className="text-gray-600 hover:text-gray-900">Crypto</Link>
          <a href={process.env.HYPERCATCHER_LINK_HEADER} target="_blank" rel="noopener noreferrer">
            <PulsatingButton
              pulseColor="rgba(59, 130, 246, 0.5)" // Blue color with opacity
              duration="2s"
            >
              Download Now
            </PulsatingButton>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header