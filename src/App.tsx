import { useState } from 'react'
import { Send, Paperclip } from 'lucide-react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Submitted:', message)
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Dark cosmic background with starry space effect */}
      <div className="space-background">
        {/* Stars */}
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        
        {/* Horizon glow */}
        <div className="horizon-glow"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen p-4 sm:p-6 lg:p-8">
        {/* Header with branding */}
        <header className="flex items-center justify-center sm:justify-start mb-8 sm:mb-12">
          <div className="flex items-center space-x-2">
            <div className="lightning-icon">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400"
              >
                <path 
                  d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" 
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-light tracking-wide">
              Godmode
            </h1>
          </div>
        </header>

        {/* Main content area */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
          {/* Headlines */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-normal leading-tight mb-4 tracking-tight">
              Automate repetitive tasks
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl font-light">
              Teach AI to do your repetitive grunt work
            </p>
          </div>

          {/* Input form */}
          <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
            <div className="relative">
              <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
                {/* Attach icon */}
                <button 
                  type="button"
                  className="p-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Paperclip size={20} />
                </button>
                
                {/* Input field */}
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your task..."
                  className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 py-4 pr-4 text-base sm:text-lg"
                />
                
                {/* Send button */}
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full transition-colors duration-200 m-2"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Footer spacer */}
        <div className="h-20 sm:h-32"></div>
      </div>
    </div>
  )
}

export default App