import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">HyperCatcher</h3>
            <p className="text-gray-600">AI Powered insights for your favorite Podcasts.</p>
          </div>
          {/* Add more footer columns here */}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          © 2024 HyperCatcher. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer