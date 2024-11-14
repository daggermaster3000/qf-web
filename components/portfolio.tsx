'use client'
import React, { useState, useEffect, useRef, Suspense } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaSun, FaMoon } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import Model from '@/components/Model'
import Link from 'next/link';
import { MouseEventHandler } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('projects')
  const [theme, setTheme] = useState('light')
  const [animating, setAnimating] = useState(false);

  const toggleTheme = () => {

    setTimeout(() => {
      setTheme(theme === 'light' ? 'dark' : 'light');
      setAnimating(true);
      // Stop the animation after the sweep completes
    }, 100);
    setAnimating(false);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove: MouseEventHandler<HTMLElement> = (event) => {
    mouse.current = {
      x: event.clientX - window.innerWidth / 2,
      y: event.clientY - window.innerHeight / 2,
    };
  };

  return (
    <div className={`min-h-screen ${theme} ${animating ? 'sweep-animation' : ''} transition-colors duration-1000`}>
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quillan Favey</h1>
        <Button onClick={toggleTheme} variant="outline">
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
      </header>

      <main className="container mx-auto px-4 py-8" onMouseMove={handleMouseMove}>
        <section
          className="h-[50vh] mb-12 relative flex items-center justify-center rounded-lg overflow-hidden"

        >
          <Canvas className="absolute inset-0 z-0">
            <ambientLight intensity={1.5} />
            <Suspense fallback={null}>
              <Model mouse={mouse} />
            </Suspense>
          </Canvas>

          <h1 className="text-4xl font-semibold z-10 text-center grid">
            <Link href="/projects#research" className="hover-underline-animation mx-2 mt-4 inline-block">
              <span>Neuroscience</span>
            </Link>
            <Link href="/projects#coding" className="hover-underline-animation mx-2 mt-4 inline-block">
              <span>Coding</span>
            </Link>
            <Link href="/music" className="hover-underline-animation mx-2 mt-4 inline-block">
              <span>Music</span>
            </Link>
          </h1>
        </section>

        <Tabs value={activeSection} onValueChange={setActiveSection} className="mb-12">
          <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto gap-4">
            <TabsTrigger value="projects" className="tab-trigger">Projects</TabsTrigger>
            <TabsTrigger value="Music" className="tab-trigger">Music</TabsTrigger>
            <TabsTrigger value="experience" className="tab-trigger">Experience</TabsTrigger>
            <TabsTrigger value="cv" className="tab-trigger">CV</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Coding and research projects</CardDescription>
              </CardHeader>


              <CardContent>
                <ul className="list-disc pl-5">
                  <li>
                    <Link href="/projects#csf-flow-dynamics" className="hover-underline-animation">
                      <span>CSF flow dynamics in zebrafish spinal canal</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects#muscle-fiber-analysis" className="hover-underline-animation">
                      <span>Muscle fiber anisotropy analysis in zebrafish</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/websites" className="hover-underline-animation">
                      <span>Websites I designed</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects#ppg-heartrate" className="hover-underline-animation">
                      <span>Remote heartrate PPG</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/other-stuff" className="hover-underline-animation">
                      <span>Other stuff</span>
                    </Link>
                  </li>
                </ul>
              </CardContent>



            </Card>
          </TabsContent>

          <TabsContent value="Music">
            <Card className="shadow-lg">
              <CardHeader><CardTitle>Music</CardTitle>
              </CardHeader>
              <CardContent>

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
              <CardHeader>
                <CardTitle>Curriculum Vitae</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <p>Download my full CV here:</p>
                <Button className="mt-4">Download CV</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="p-4 text-center ">
        <p>&copy; 2024 Quillan Favey. All rights reserved.</p>
      </footer>
    </div>
  );
}
