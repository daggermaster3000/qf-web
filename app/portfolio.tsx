'use client'

import { useState, useEffect } from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// 3D Animation Component
// function AnimatedCube() {
//   const meshRef = useRef()
//   useFrame((state, delta) => {
//     meshRef.current.rotation.x += delta * 0.2
//     meshRef.current.rotation.y += delta * 0.3
//   })

//   return (
//     <Box ref={meshRef} args={[1, 1, 1]} scale={2}>
//       <meshStandardMaterial color="#88c0d0" />
//     </Box>
//   )
// }

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('projects')
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div className={`min-h-screen ${theme} transition-colors duration-300`}>
      <header className="p-4 flex justify-between items-center bg-primary text-primary-foreground">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <Button onClick={toggleTheme} variant="outline">
          Toggle Theme
        </Button>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="h-[50vh] mb-12">
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            {/* <AnimatedCube /> */}
            <OrbitControls />
            <Text
              position={[0, 0, 2]}
              fontSize={0.5}
              color="#eceff4"
              anchorX="center"
              anchorY="middle"
            >
              Neuroscience | Code | Music
            </Text>
          </Canvas>
        </section>

        <Tabs value={activeSection} onValueChange={setActiveSection} className="mb-12">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="cv">CV</TabsTrigger>
          </TabsList>
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Showcase of your coding and research projects</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>Neuroscience Research Project</li>
                  <li>Machine Learning for EEG Analysis</li>
                  <li>Music Visualization App</li>
                  <li>Personal Portfolio Website</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
                <CardDescription>Your professional and academic experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>MSc in Neuroscience - University Name</li>
                  <li>Research Assistant - Neurobiology Lab</li>
                  <li>Data Analyst Intern - Tech Company</li>
                  <li>Volunteer - Music Therapy Program</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="cv">
            <Card>
              <CardHeader>
                <CardTitle>Curriculum Vitae</CardTitle>
                <CardDescription>Your detailed professional background</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Download my full CV here:</p>
                <Button className="mt-4">Download CV</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}