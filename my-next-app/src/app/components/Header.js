import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold">HyperCatcher</a>
        </Link>
        <div className="space-x-4">
          <Link href="/features"><a className="text-gray-600 hover:text-gray-900">Features</a></Link>
          <Link href="/pricing"><a className="text-gray-600 hover:text-gray-900">Pricing</a></Link>
          <Link href="/docs"><a className="text-gray-600 hover:text-gray-900">Docs</a></Link>
          <Link href="/login">
            <a className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Log in</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}