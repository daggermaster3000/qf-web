// app/projects.tsx
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// Data for projects
const codingProjects = [
    {
        title: 'Plotdelice',
        description: 'A small collection of functions for custom plots in python',
        imageUrl: 'https://raw.githubusercontent.com/daggermaster3000/plotdelice/refs/heads/main/assets/image.png',
        link: 'https://github.com/daggermaster3000/plotdelice',
        id: 'plotdelice'
    },
    {
        title: 'Cerebroflow',
        description: 'A python library to analyze csf flow in zebrafish larvae using a kymograph approach',
        imageUrl: 'https://github.com/daggermaster3000/CerebroFlow/assets/82659911/78bd6876-96be-4d15-b8d8-577b9c4d4cc5',
        link: 'https://github.com/daggermaster3000/Cerebroflow',
        id: 'cerebroflow'
    },
    {
        title: 'Anisofish',
        description: 'A python repository to analyze zebrafish muscle fiber anisotropy using a 2D wavelet transform modulus maxima approach',
        imageUrl: 'https://github.com/user-attachments/assets/0901b5ed-e88c-408c-8632-6503b47367cc',
        link: 'https://github.com/daggermaster3000/AnisoFish',
        id: 'anisofish'
    }
];

const researchProjects = [
    {
        title: 'Neuroscience Msc Thesis',
        description: 'Investigating body axis curvature in zebrafish ciliopathy models using a quantitative approach. An in-depth analysis of CSF flow and muscle fiber anisotropy in zebrafish models.',
        imageUrl: '/qf-portfolio/public/fish.jpg',
        link: 'https://digitalposterbachmannlab.netlify.app/',
        id: 'csf-flow-dynamics'
    },
    {
        title: 'iGEM Synthetic Biology Project',
        description: 'A uni project focusing on producing and testing an antifreeze protein solution to protect crops from cold temperatures.',
        imageUrl: 'https://static.igem.org/mediawiki/2021/1/1c/T--UNILausanne--fig-6-hardware.jpg',
        link: 'https://2021.igem.org/Team:UNILausanne/Hardware',
        id: 'igem'
    }
];

const otherProjects = [
    {
        title: 'Neuroscience Msc Thesis',
        description: 'Investigating body axis curvature in zebrafish ciliopathy models using a quantitative approach. An in-depth analysis of CSF flow and muscle fiber anisotropy in zebrafish models.',
        imageUrl: '/fish.jpg',
        link: 'https://digitalposterbachmannlab.netlify.app/',
        id: 'csf-flow-dynamics'
    },

];

type ProjectProps = {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  };
// Collapsible project component with Lucide's ChevronRight icon
const Project = ({ title, description, imageUrl, link }: ProjectProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full mb-8 flex flex-col items-center">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between cursor-pointer w-full max-w-md p-4 project rounded-lg"
            >
                <h3 className="text-xl font-medium">{title}</h3>
                <ChevronRight
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                />
            </div>
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden transform ${isOpen ? 'max-h-screen opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'} w-full flex flex-col items-center`}
            >
                {isOpen && (
                    <div className="flex flex-col items-center mt-4">
                        <img src={imageUrl} alt={title} className="w-full max-w-xs rounded-lg mb-4" />
                        <p className="mb-4">{description}</p>
                        <a
                            className="hover-underline-animation text-blue-600"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>project link</span>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function Projects() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <header className="p-4 w-full flex justify-between items-center max-w-4xl">
                <Link href="/" className="font-bold hover-underline-animation text-2xl ">
                    <span>Quillan Favey</span>
                </Link>
                <Link href="/" className="font-bold hover-underline-animation text-2xl">
                    <span>back</span>
                </Link>
            </header>

            <div className="flex flex-col items-center p-6 w-full max-w-4xl">
                <h1 className="text-5xl font-semibold mb-10 text-center">Projects</h1>

                {/* Research Projects Section */}
                <section className="text-center w-full">
                    <h2 id="research" className="text-3xl font-semibold mb-6">
                        Research Projects
                    </h2>
                    <div>
                        {researchProjects.map((project) => (
                            <Project
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                link={project.link}
                            />
                        ))}
                    </div>
                </section>

                {/* Coding Projects Section */}
                <section className="text-center w-full mb-16">
                    <h2 id="coding" className="text-3xl font-semibold mb-6">
                        Coding Projects
                    </h2>
                    <div>
                        {codingProjects.map((project) => (
                            <Project
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                link={project.link}
                            />
                        ))}
                    </div>
                </section>
                 {/* Other stuff Section */}
                 <section className="text-center w-full mb-16">
                    <h2 id="other" className="text-3xl font-semibold mb-6">
                        Other stuff
                    </h2>
                    <div>
                        {otherProjects.map((project) => (
                            <Project
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                link={project.link}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
