'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplineScene } from '@/components/SplineScene'

gsap.registerPlugin(ScrollTrigger)

const BUILDING_SCENE = 'https://prod.spline.design/kjYLVpJz2JHB1hUC/scene.splinecode'

export function HeroIngebeton() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const splineRef = useRef<HTMLDivElement>(null)
  const splineApp = useRef<any>(null)
  
  // Create a proxy object for GSAP to animate
  const splineState = useRef({ rotation: 0, scale: 1 })

  const onLoad = (app: any) => {
    splineApp.current = app
    
    // Check if the HTML element has the 'dark' class
    const isDark = document.documentElement.classList.contains('dark') || 
                   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    
    if (app._scene) {
      if (isDark) {
        // Set to black for dark mode
        app.setBackgroundColor('#000000')
      } else {
        // Set to transparent or white for light mode
        app.setBackgroundColor('#ffffff')
      }
    }
  }

  // Effect to listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class' && splineApp.current && splineApp.current._scene) {
          const isDark = document.documentElement.classList.contains('dark')
          splineApp.current.setBackgroundColor(isDark ? '#000000' : '#ffffff')
        }
      })
    })
    
    observer.observe(document.documentElement, { attributes: true })
    
    // Also listen to system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      // Only apply system preference if no manual override class exists
      if (!document.documentElement.classList.contains('dark') && !document.documentElement.classList.contains('light')) {
        if (splineApp.current && splineApp.current._scene) {
          splineApp.current.setBackgroundColor(e.matches ? '#000000' : '#ffffff')
        }
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    
    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: '.sticky-hero',
        },
      })

      // Replace the DOM animation with proxy animation
      tl.to(splineState.current, {
        rotation: Math.PI, // 180 degrees in radians
        scale: 1.3,
        ease: 'none',
        duration: 0.5,
        onUpdate: () => {
          if (splineRef.current) {
            // Apply scale to the DOM wrapper (this is safe and doesn't squish)
            gsap.set(splineRef.current, { scale: splineState.current.scale })
          }
          if (splineApp.current && splineApp.current._scene) {
            // Try to rotate the whole scene directly
            splineApp.current._scene.rotation.y = splineState.current.rotation
          }
        }
      }).to(splineState.current, {
        rotation: Math.PI * 2, // 360 degrees
        scale: 1.6,
        ease: 'none',
        duration: 0.5,
        onUpdate: () => {
          if (splineRef.current) {
            gsap.set(splineRef.current, { scale: splineState.current.scale })
          }
          if (splineApp.current && splineApp.current._scene) {
            splineApp.current._scene.rotation.y = splineState.current.rotation
          }
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={wrapperRef}
      className="relative bg-white dark:bg-black transition-colors duration-500"
      style={{ height: '300vh' }}
    >
      <div className="sticky-hero sticky top-0 h-screen w-full flex items-center overflow-hidden">

        {/* Ligne décorative rouge verticale */}
        <div
          className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-24"
          style={{
            background: 'linear-gradient(to bottom, transparent, #E31E24, transparent)',
          }}
        />

        {/* GAUCHE — Texte */}
        <div className="relative z-10 w-1/2 pl-16 flex flex-col gap-6">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: '#E31E24', letterSpacing: '0.15em' }}
          >
            Bureau d'études structure
          </span>

          <div>
            <h1 className="text-6xl font-light text-black dark:text-white leading-none tracking-tight">
              Ingébéton
            </h1>
            <p
              className="text-2xl font-extralight mt-3 leading-snug text-black/40 dark:text-white/35"
            >
              Votre bureau d'études structure<br />
              experts en neuf et rénovation.
            </p>
          </div>

          <p
            className="text-sm leading-relaxed max-w-xs text-black/40 dark:text-white/25 font-light"
          >
            Calculs de structure · Études de faisabilité<br />
            Suivi de chantier · De la conception à la livraison.
          </p>

          <div className="flex gap-3 pt-2">
            <button
              className="px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85"
              style={{ background: '#E31E24', borderRadius: '4px' }}
            >
              Nous contacter
            </button>
            <button
              className="px-6 py-3 text-sm text-black/40 dark:text-white/40 transition-colors hover:text-black/60 dark:hover:text-white/60 border border-black/10 dark:border-white/10 rounded-md"
            >
              Nos projets
            </button>
          </div>

          {/* Scroll hint animé */}
          <div className="flex items-center gap-2 pt-4 text-black/20 dark:text-white/20">
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
              <rect x="1" y="1" width="12" height="20" rx="6" stroke="currentColor" strokeWidth="1" />
              <circle cx="7" cy="6" r="1.5" fill="currentColor">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0; 0 6; 0 0"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
            <span style={{ fontSize: '10px', letterSpacing: '0.14em' }}>SCROLL</span>
          </div>
        </div>

        {/* DROITE — Bâtiment 3D Spline */}
        <div
          ref={splineRef}
          className="w-1/2 h-full"
          style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
          <SplineScene scene={BUILDING_SCENE} className="w-full h-full" onLoad={onLoad} />

          {/* Fondu gauche pour cacher l'artefact de bordure */}
          <div
            className="absolute inset-y-0 -left-2 w-24 pointer-events-none hidden dark:block"
            style={{ background: 'linear-gradient(to right, #000000 10%, transparent)' }}
          />
          <div
            className="absolute inset-y-0 -left-2 w-24 pointer-events-none block dark:hidden"
            style={{ background: 'linear-gradient(to right, #ffffff 10%, transparent)' }}
          />
          {/* Fondu bas - Aggrandi pour cacher la lumière sous le bâtiment */}
          <div
            className="absolute bottom-0 inset-x-0 h-48 pointer-events-none hidden dark:block"
            style={{ background: 'linear-gradient(to top, #000000 20%, transparent)' }}
          />
          <div
            className="absolute bottom-0 inset-x-0 h-48 pointer-events-none block dark:hidden"
            style={{ background: 'linear-gradient(to top, #ffffff 20%, transparent)' }}
          />
        </div>

      </div>
    </section>
  )
}
