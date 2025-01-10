// app/projects.tsx
"use client"

import Link from 'next/link';
import { Card,  CardDescription, CardHeader,CardFooter, CardTitle } from "@/components/ui/card"
import AudioPlayer from '@/components/ui/audioComponent';

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
        imageUrl: '/qf-web/fish.jpg',
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

// const otherProjects = [
//     {
//         title: 'Neuroscience Msc Thesis',
//         description: 'Investigating body axis curvature in zebrafish ciliopathy models using a quantitative approach. An in-depth analysis of CSF flow and muscle fiber anisotropy in zebrafish models.',
//         imageUrl: 'qf-web/fish.jpg',
//         link: 'https://digitalposterbachmannlab.netlify.app/',
//         id: 'remoteppg'
//     },

// ];

type ProjectProps = {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
};

const Project = ({ title, description, imageUrl, link }: ProjectProps) => {
    return (
        <div className="w-full">
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
                <CardFooter className="flex justify-center mt-4">
                    <a
                        className="text-blue-600 hover-underline-animation"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Project Link
                    </a>
                </CardFooter>
            </Card>
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
                    <span>Back</span>
                </Link>
            </header>

            <div className="flex flex-col items-center p-6 w-full max-w-4xl">
                <h1 className="text-5xl font-semibold mb-10 text-center">Projects</h1>

                {/* Research Projects Section */}
                <section className="text-center w-full mb-12">
                    <h2 id="research" className="text-3xl font-semibold mb-6">
                        Research Projects
                    </h2>
                    <div className="grid grid-cols-2 gap-8">
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
                <section className="text-center w-full mb-12">
                    <h2 id="coding" className="text-3xl font-semibold mb-6">
                        Coding Projects
                    </h2>
                    <div className="grid grid-cols-2 gap-8">
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
                

                {/* Other Projects Section */}
                 <section className="text-center w-full mb-16">
                    <h2 id="other" className="text-3xl font-semibold mb-6">
                        Music
                    </h2>
                    <div className="grid grid-cols-2 gap-8">
                    <AudioPlayer Title="Good Intentions" src="Sommatif mix print.wav" defaultVolume={0.5} playbackRate={1} />
                    </div>
                </section> 
            </div>
        </div>
    );
}
