'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, BookOpen, FlaskConical, Scale } from 'lucide-react'

const navigation = [
  { name: 'Learn', href: '/learn', icon: BookOpen },
  { name: 'Tools', href: '/tools', icon: FlaskConical },
  { name: 'Regulatory Status', href: '/learn/peptides-vs-supplements-regulation-india', icon: Scale },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <FlaskConical className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">
                Peptide<span className="text-primary-600">Clarity</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                <item.icon className="h-4 w-4 mr-1.5" />
                {item.name}
              </Link>
            ))}
            <Link href="/tools" className="btn-primary">
              Get Toolkit
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="sm:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/tools"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full"
                >
                  Get Toolkit
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
