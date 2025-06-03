'use client'
import React, { useState, useEffect, useRef, Suspense } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import Model from '@/components/Model'
import Link from 'next/link';
import { MouseEventHandler } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('projects');
  const [theme, setTheme] = useState('light');
  const [animating, setAnimating] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    setAnimating(true);
    setTimeout(() => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      if (typeof window !== 'undefined') localStorage.setItem('theme', newTheme);
      setAnimating(false);
    }, 100);
  };

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
      className={`min-h-screen ${theme} ${animating ? 'sweep-animation' : ''} transition-colors duration-1000 relative`}
      onMouseMove={handleMouseMove}
    >
      {/* Header with z-30 to stay on top */}
      <header className="p-4 flex justify-between items-center relative">
        <div className="flex items-center gap-4">
          <Button>
          <a className="text-2xl font-bold" onClick={() => setSidebarOpen(!sidebarOpen)}>Quillan Favey</a>
        </Button>
        </div>
        <Button onClick={toggleTheme} variant="outline">
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
      </header>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-slate-800 text-white z-20 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">Menu</h2>
          <Button size="sm" variant="ghost" onClick={closeSidebar}><FaTimes /></Button>
        </div>
        <nav className="mt-4 flex flex-col gap-6 p-4">
          <Link href="/projects#research" onClick={closeSidebar} className="hover:underline">Neuroscience</Link>
          <Link href="/projects#coding" onClick={closeSidebar} className="hover:underline">Coding</Link>
          <Link href="/music" onClick={closeSidebar} className="hover:underline">Music</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <section className="h-[80vh] mb-12 relative overflow-hidden rounded-lg">
          {/* Canvas Parallax Background */}
          <div
            className="absolute inset-0 z-0 transition-transform duration-200"
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
          {/* Text Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white bg-black/30 backdrop-blur-md">
            <h1 className="text-5xl font-bold tracking-tight leading-tight">Welcome to my Portfolio</h1>
            <p className="text-xl mt-4">Explore Neuroscience, Coding, and Music</p>
          </div>
        </section>

        <Tabs value={activeSection} onValueChange={setActiveSection} className="mb-12">
          <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto gap-4">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="cv">CV</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Coding and research projects</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li><Link href="/projects#csf-flow-dynamics" className="hover:underline">CSF flow dynamics in zebrafish</Link></li>
                  <li><Link href="/projects#muscle-fiber-analysis" className="hover:underline">Muscle fiber anisotropy</Link></li>
                  <li><Link href="/websites" className="hover:underline">Websites I designed</Link></li>
                  <li><Link href="/projects#ppg-heartrate" className="hover:underline">Remote heartrate PPG</Link></li>
                  <li><Link href="/other-stuff" className="hover:underline">Other stuff</Link></li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="music">
            <Card className="shadow-lg">
              <CardHeader><CardTitle>Music</CardTitle></CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li><Link href="https://www.youtube.com/watch?v=ucPeQpzOHj8" className="hover:underline">Low lights</Link></li>
                  <li><Link href="https://www.youtube.com/watch?v=CW8CQbgKv0Y" className="hover:underline">Ruins</Link></li>
                  <li><Link href="/projects#yosesh" className="hover:underline">Drum Session project</Link></li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Experience</CardTitle>
                <CardDescription>Professional and academic experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>MSc in Neuroscience - University of Zurich</li>
                  <li>Bsc in Biology - University of Lausanne</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cv">
            <Card className="shadow-lg">
              <CardHeader><CardTitle>Curriculum Vitae</CardTitle></CardHeader>
              <CardContent>
                <p>Download my full CV here:</p>
                <Button className="mt-4">Download CV</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="p-4 text-center">
        <p>🚀</p>
      </footer>
    </div>
  );
}
