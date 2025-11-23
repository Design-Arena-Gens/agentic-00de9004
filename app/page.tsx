'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Scene {
  id: number
  title: string
  narration: string
  background: string
  elements: JSX.Element
}

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showSubtitles, setShowSubtitles] = useState(true)

  const scenes: Scene[] = [
    {
      id: 0,
      title: "Introduction",
      narration: "Namaste. I am Bisu Maharana, the chief architect of this grand temple dedicated to Surya, the Sun God. It is the year 1250 CE, and King Narasimhadeva I has commissioned me to create the most magnificent temple the world has ever seen.",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      elements: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-48 h-48 rounded-full bg-yellow-400 shadow-2xl"
            style={{
              boxShadow: "0 0 60px rgba(251, 191, 36, 0.8), 0 0 120px rgba(251, 191, 36, 0.4)"
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-4">The Making of Konarak</h1>
            <p className="text-2xl text-amber-200">A Master Architect's Vision</p>
          </motion.div>
        </div>
      )
    },
    {
      id: 1,
      title: "The Grand Vision",
      narration: "Our temple is designed as a colossal chariot with 24 wheels, each 12 feet in diameter, pulled by seven horses. This represents Surya's celestial chariot that carries the sun across the sky each day.",
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      elements: (
        <div className="flex items-center justify-center h-full">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative"
          >
            <div className="text-center space-y-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                <svg width="200" height="200" viewBox="0 0 200 200" className="text-amber-600">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="8"/>
                  {[...Array(24)].map((_, i) => (
                    <line
                      key={i}
                      x1="100"
                      y1="100"
                      x2={100 + 70 * Math.cos((i * 360 / 24) * Math.PI / 180)}
                      y2={100 + 70 * Math.sin((i * 360 / 24) * Math.PI / 180)}
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                  ))}
                  <circle cx="100" cy="100" r="20" fill="currentColor"/>
                </svg>
              </motion.div>
              <p className="text-3xl text-white font-bold">24 Wheels × 7 Horses</p>
              <div className="flex justify-center space-x-4">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 0 }}
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="text-6xl"
                  >
                    🐎
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 2,
      title: "The Sacred Geometry",
      narration: "Every measurement is calculated according to ancient Shilpa Shastra texts. The temple is 229 feet tall, aligned precisely with the cardinal directions. At dawn on the equinoxes, the first rays of the sun illuminate the sanctum.",
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      elements: (
        <div className="flex items-center justify-center h-full">
          <div className="grid grid-cols-3 gap-8">
            {[
              { label: "Height", value: "229 feet", icon: "⬆️" },
              { label: "Base Width", value: "120 feet", icon: "↔️" },
              { label: "Wheel Diameter", value: "12 feet", icon: "⭕" },
              { label: "Stone Blocks", value: "12,000+", icon: "🧱" },
              { label: "Sculptors", value: "1,200", icon: "👷" },
              { label: "Years to Build", value: "12", icon: "📅" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-2xl text-center"
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "The Construction Process",
      narration: "We quarry khondalite rocks from the nearby hills. Each block weighs several tons. Our workers use wooden rollers, ropes, and elephants to transport them. The precision required is extraordinary - the joints are so fine that not even a needle can pass through.",
      background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      elements: (
        <div className="flex items-center justify-center h-full">
          <div className="space-y-12">
            <motion.div
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="flex items-center space-x-8"
            >
              <div className="text-8xl">🐘</div>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-7xl"
              >
                🧱
              </motion.div>
              <div className="text-6xl">➡️</div>
              <div className="text-8xl">🏛️</div>
            </motion.div>

            <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Construction Stages</h3>
              <div className="space-y-4">
                {[
                  "1. Quarrying khondalite stone blocks",
                  "2. Transportation using elephants and rollers",
                  "3. Precision cutting and shaping",
                  "4. Intricate carving by master sculptors",
                  "5. Assembly with iron dowels and clamps"
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.3 }}
                    className="text-xl text-gray-700 font-medium"
                  >
                    {step}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "The Intricate Sculptures",
      narration: "Our temple will feature over 2,000 sculptures. Every inch tells a story - from divine deities to celestial dancers, from mythical creatures to scenes from daily life. We employ 1,200 of the finest artisans from across the kingdom.",
      background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      elements: (
        <div className="flex items-center justify-center h-full">
          <div className="grid grid-cols-2 gap-12">
            {[
              { emoji: "🕉️", title: "Divine Deities", count: "500+" },
              { emoji: "💃", title: "Celestial Dancers", count: "400+" },
              { emoji: "🐉", title: "Mythical Creatures", count: "300+" },
              { emoji: "🌺", title: "Floral Motifs", count: "800+" }
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-purple-500 to-pink-500 p-10 rounded-3xl shadow-2xl text-white text-center cursor-pointer"
              >
                <div className="text-7xl mb-4">{category.emoji}</div>
                <div className="text-2xl font-bold mb-2">{category.title}</div>
                <div className="text-4xl font-black">{category.count}</div>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "The Astronomical Marvel",
      narration: "This temple is not merely a place of worship - it is a cosmic instrument. The wheels function as sundials, accurately telling time. The position of the sun god in the sanctum tracks the solar calendar. We have encoded the movements of the heavens in stone.",
      background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
      elements: (
        <div className="flex items-center justify-center h-full">
          <div className="relative w-full max-w-4xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-4xl"
                  style={{
                    left: `${50 + 40 * Math.cos((i * 30 - 90) * Math.PI / 180)}%`,
                    top: `${50 + 40 * Math.sin((i * 30 - 90) * Math.PI / 180)}%`,
                  }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  ⭐
                </motion.div>
              ))}
            </motion.div>

            <div className="relative z-10 bg-white/10 backdrop-blur-lg p-12 rounded-3xl border-4 border-yellow-400">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-center mb-8"
              >
                <div className="text-9xl">☀️</div>
              </motion.div>

              <div className="text-white text-center space-y-4">
                <h3 className="text-4xl font-bold mb-6">Astronomical Functions</h3>
                <p className="text-xl">🕐 24 wheels = 24 hours of the day</p>
                <p className="text-xl">🌓 12 wheel pairs = 12 months</p>
                <p className="text-xl">🌍 8 major spokes = 8 prahars (3-hour periods)</p>
                <p className="text-xl">⏰ Wheels cast shadows for precise timekeeping</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "The Legacy",
      narration: "This temple will stand as a testament to human devotion, mathematical precision, and artistic brilliance. Though I may not live to see its completion, generations will marvel at what we have created here in Konarak. This is more than stone - it is the sun god's earthly chariot, frozen in eternal motion.",
      background: "linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #48dbfb 100%)",
      elements: (
        <div className="flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-center space-y-8 max-w-4xl"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-9xl mb-8"
            >
              🏛️
            </motion.div>

            <h2 className="text-6xl font-bold text-white drop-shadow-2xl">
              The Konarak Sun Temple
            </h2>

            <div className="bg-white/90 backdrop-blur p-8 rounded-3xl shadow-2xl">
              <p className="text-2xl text-gray-800 font-medium leading-relaxed">
                A UNESCO World Heritage Site<br/>
                <span className="text-xl text-gray-600">
                  "A masterpiece of Kalinga architecture and one of the most magnificent monuments of India"
                </span>
              </p>
            </div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-7xl"
            >
              ✨
            </motion.div>
          </motion.div>
        </div>
      )
    }
  ]

  useEffect(() => {
    if (!isPlaying) return

    const timer = setTimeout(() => {
      if (currentScene < scenes.length - 1) {
        setCurrentScene(currentScene + 1)
      } else {
        setIsPlaying(false)
      }
    }, 12000)

    return () => clearTimeout(timer)
  }, [currentScene, isPlaying, scenes.length])

  const handleNext = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1)
    }
  }

  const handlePrev = () => {
    if (currentScene > 0) {
      setCurrentScene(currentScene - 1)
    }
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{ background: scenes[currentScene].background }}
        >
          <div className="h-screen w-full p-8">
            {scenes[currentScene].elements}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Subtitles */}
      <AnimatePresence>
        {showSubtitles && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-32 left-0 right-0 px-8"
          >
            <div className="max-w-5xl mx-auto bg-black/80 backdrop-blur-lg p-6 rounded-2xl">
              <p className="text-white text-2xl text-center leading-relaxed">
                {scenes[currentScene].narration}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls */}
      <div className="fixed bottom-8 left-0 right-0 z-50">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-lg rounded-full shadow-2xl p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentScene === 0}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-full font-bold text-lg transition-all disabled:cursor-not-allowed"
            >
              ← Previous
            </button>

            <div className="flex items-center space-x-4">
              <button
                onClick={handlePlayPause}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold text-lg transition-all"
              >
                {isPlaying ? '⏸️ Pause' : '▶️ Play'}
              </button>

              <button
                onClick={() => setShowSubtitles(!showSubtitles)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold text-lg transition-all"
              >
                {showSubtitles ? '💬' : '🔇'}
              </button>
            </div>

            <button
              onClick={handleNext}
              disabled={currentScene === scenes.length - 1}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-full font-bold text-lg transition-all disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>

          <div className="mt-4 flex items-center justify-center space-x-2">
            {scenes.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentScene(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentScene ? 'bg-purple-600 w-8' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-2 text-gray-700 font-medium">
            Scene {currentScene + 1} of {scenes.length}: {scenes[currentScene].title}
          </div>
        </div>
      </div>
    </div>
  )
}
