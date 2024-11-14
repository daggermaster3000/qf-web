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
        imageUrl: '/plotdelice.png',
        link: 'https://github.com/daggermaster3000/plotdelice',
        id: 'plotdelice'
    },
    {
        title: 'Cerebroflow',
        description: 'A python library to analyze csf flow in zebrafish larvae using a kymograph approach',
        imageUrl: 'https://private-user-images.githubusercontent.com/82659911/307736313-78bd6876-96be-4d15-b8d8-577b9c4d4cc5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzE0NTA1MDUsIm5iZiI6MTczMTQ1MDIwNSwicGF0aCI6Ii84MjY1OTkxMS8zMDc3MzYzMTMtNzhiZDY4NzYtOTZiZS00ZDE1LWI4ZDgtNTc3YjljNGQ0Y2M1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTEyVDIyMjMyNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRkMzA2MGU4MjMwMmQ1NTAwOTE2MDk0YWQ0Y2UxNjkzN2M2ODBjOWI4MGExOTA3MDllMmQ1Y2U1NzZmMDdkZDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.HDwVEEUncTjXPMmPCM8RaxwM-KD8eCyuxUu00wTeEW4',
        link: 'https://github.com/daggermaster3000/Cerebroflow',
        id: 'cerebroflow'
    },
    {
        title: 'Anisofish',
        description: 'A python repository to analyze zebrafish muscle fiber anisotropy using a 2D wavelet transform modulus maxima approach',
        imageUrl: '/anisofish.png',
        link: 'https://github.com/daggermaster3000/AnisoFish',
        id: 'anisofish'
    }
];

const researchProjects = [
    {
        title: 'Neuroscience Msc Thesis',
        description: 'Investigating body axis curvature in zebrafish ciliopathy models using a quantitative approach. An in-depth analysis of CSF flow and muscle fiber anisotropy in zebrafish models.',
        imageUrl: '/fish.jpg',
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
    {
        title: 'iGEM Synthetic Biology Project',
        description: 'A uni project focusing on producing and testing an antifreeze protein solution to protect crops from cold temperatures.',
        imageUrl: 'https://static.igem.org/mediawiki/2021/1/1c/T--UNILausanne--fig-6-hardware.jpg',
        link: 'https://2021.igem.org/Team:UNILausanne/Hardware',
        id: 'igem'
    }
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
