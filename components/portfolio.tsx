'use client'
import React, { useState, useEffect, useRef, Suspense } from 'react'
import { Button } from "@/components/ui/button"
import { FaTimes } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import Model from '@/components/Model'
import Link from 'next/link';
import { MouseEventHandler } from 'react';
import Projects from '@/components/Projects'

export default function Portfolio() {
  // const [activeSection, setActiveSection] = useState('projects');
  const [theme, setTheme] = useState('light');
  // const [animating, setAnimating] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) setTheme(storedTheme);
    }
  }, []);

  // const toggleTheme = () => {
  //   setAnimating(true);
  //   setTimeout(() => {
  //     const newTheme = theme === 'light' ? 'dark' : 'light';
  //     setTheme(newTheme);
  //     if (typeof window !== 'undefined') localStorage.setItem('theme', newTheme);
  //     setAnimating(false);
  //   }, 100);
  // };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleMouseMove: MouseEventHandler<HTMLElement> = (event) => {
    mouse.current = {
      x: event.clientX - window.innerWidth / 2,
      y: event.clientY - window.innerHeight / 2,
    };
  };

  const closeSidebar = () => setSidebarOpen(false);

  return (

    <div
      className={`min-h-screen ${theme} relative`}
      onMouseMove={handleMouseMove}
    >
      {/* Header with z-30 to stay on top */}
      <header className="p-4 flex justify-between items-center relative">
        <div className="flex items-center gap-4 hover:scale-105">
          <Button>
            <a className="text-2xl font-bold " onClick={() => setSidebarOpen(!sidebarOpen)}>Quillan Favey</a>
          </Button>
        </div>
        {/* <Button onClick={toggleTheme} variant="outline">
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button> */}
      </header>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-slate-800 text-white z-20 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">Menu</h2>
          <Button size="sm" variant="ghost" onClick={closeSidebar}><FaTimes /></Button>
        </div>
        <nav className="mt-4 flex flex-col gap-6 p-4">
          <Link href="#research" onClick={closeSidebar} className="hover:underline">Neuroscience</Link>
          <Link href="#coding" onClick={closeSidebar} className="hover:underline">Coding</Link>
          <Link href="#music" onClick={closeSidebar} className="hover:underline">Music</Link>
        </nav>
      </aside>

      {/* Main content */}
      <div
            className="fixed inset-0 z-0 transition-transform duration-200"
            style={{
              transform: `translate3d(${mouse.current.x * 0.01}px, ${mouse.current.y * 0.01}px, 0)`,
            }}
          >
            <Canvas>
              <ambientLight intensity={1.5} />
              <Suspense fallback={null}>
                <Model mouse={mouse} />
              </Suspense>
            </Canvas>
          </div>
      <main className="container mx-auto px-4 py-8 backdrop-blur-md">
        
        <section className="h-[100vh] mb-12 relative overflow-hidden rounded-lg">
          
          
          {/* Text Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white backdrop-blur-md">
            <h1 className="text-5xl font-bold tracking-tight leading-tight drop-shadow-[2px_2px_4px_#000]">
              Welcome to my Portfolio
            </h1>
            <div className="flex flex-wrap justify-center mt-6 gap-4">
              <a
                href="#research"
                className="text-xl font-medium hover:scale-105 hover:text-blue-300 transition-transform duration-200 drop-shadow-[1px_1px_2px_#000]"
              >
                Neuroscience
              </a>
              <a
                href="#coding"
                className="text-xl font-medium hover:scale-105 hover:text-green-300 transition-transform duration-200 drop-shadow-[1px_1px_2px_#000]"
              >
                Coding
              </a>
              <a
                href="#music"
                className="text-xl font-medium hover:scale-105 hover:text-pink-300 transition-transform duration-200 drop-shadow-[1px_1px_2px_#000]"
              >
                Music
              </a>
            </div>
          </div>
          

        </section>
        <section>

   <div className='relative'><Projects ></Projects></div>

        </section>

      </main>

      <footer className="p-4 text-center">
        <p>🚀</p>
      </footer>
    </div>
  );
}
