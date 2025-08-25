import { useEffect, useState } from 'react'

export function useDarkMode() {
  // App-controlled theme only; ignore system preferences
  const [dark, setDark] = useState(false)

  // Apply theme class and color-scheme whenever state changes
  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    // Prevent system/browser from forcing colors
    root.style.colorScheme = dark ? 'dark' : 'light'
  }, [dark])

  // Initialize on mount (from saved preference if present), default to light
  useEffect(() => {
    const root = document.documentElement
    try {
      const saved = localStorage.getItem('theme')
      const prefersDark = saved === 'dark'
      if (prefersDark) {
        root.classList.add('dark')
        root.style.colorScheme = 'dark'
        setDark(true)
        return
      }
    } catch {}
    root.classList.remove('dark')
    root.style.colorScheme = 'light'
  }, [])

  // Toggle with temporary transition/animation disable to avoid flicker
  const toggle = () => {
    const root = document.documentElement
    // Add a class that disables transitions/animations during theme flip
    root.classList.add('theme-changing')
    // Flip theme
    setDark((d) => {
      const next = !d
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light')
      } catch {}
      return next
    })
    // Remove the class shortly after the DOM updates paint
    // Allow a couple of frames for the classList change above to apply
    requestAnimationFrame(() => {
      setTimeout(() => {
        root.classList.remove('theme-changing')
      }, 150)
    })
  }

  return { dark, toggle }
}