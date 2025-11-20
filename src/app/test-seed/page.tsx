'use client'

import { useState } from 'react'

export default function TestSeedPage() {
  const [result, setResult] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const handleSeed = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/seed', {
        method: 'POST',
      })
      const data = await response.json()
      setResult(JSON.stringify(data, null, 2))
    } catch (error) {
      setResult(`Error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Test Database Seed</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <button
            onClick={handleSeed}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white px-6 py-2 rounded-lg font-semibold"
          >
            {loading ? 'Seeding...' : 'Seed Database'}
          </button>
        </div>

        {result && (
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Result:</h3>
            <pre className="whitespace-pre-wrap text-sm">{result}</pre>
          </div>
        )}
      </div>
    </div>
  )
}