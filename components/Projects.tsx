// app/projects.tsx
"use client"

import { Card,  CardDescription, CardHeader,CardFooter, CardTitle } from "@/components/ui/card"
import AudioPlayer from '@/components/ui/audioComponent';

// Data for projects
const codingProjects = [
    {
        title: 'Oscilloscop.',
        description: 'A webpage implementation of an oscilloscope to visualize sound waves',
        imageUrl: '/qf-web/oscilloscop.png',
        link: 'https://oscilloscop.vercel.app/src/index.html',
        id: 'oscilloscop'
    },
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
            

            <div className="flex flex-col items-center p-6 w-full max-w-4xl">
                
                {/* Research Projects Section */}
                <section className="text-center w-full ">
                    <h1 id="research" className="pb-20 text-white text-5xl font-bold tracking-tight leading-tight drop-shadow-[2px_2px_4px_#000]">
                        Research Projects
                    </h1>
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
                <section className="text-center w-full mb-12 pt-20">
                    <h1 id="coding" className="pb-20 text-white text-5xl font-bold tracking-tight leading-tight drop-shadow-[2px_2px_4px_#000]">
                        Coding Projects
                    </h1>
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
                 <section className="text-center w-full mb-16 pt-20">
                    <h1 id="music" className="pb-20 text-white text-5xl font-bold tracking-tight leading-tight drop-shadow-[2px_2px_4px_#000]">
                        Music
                    </h1>
                    <div className="grid grid-cols-2 gap-8">
                        <Project
                            key={"aprifreeze"}
                            title={"Aprifreeze soundtrack"}
                            description={"Soundtrack for the uni's igem team in 2021"}
                            imageUrl={"https://video.igem.org/lazy-static/previews/f968d11d-1446-44f3-86bd-529755dbde3a.jpg"}
                            link={"https://video.igem.org/w/kGRDA6yXK5UHFApvq8r6sr"}
                        />
                        <Project
                            key={"low lights"}
                            title={"Low lights"}
                            description={"A song recorded during covid on an ipad with an old guitar"}
                            imageUrl={"https://i.ytimg.com/vi/ucPeQpzOHj8/hqdefault.jpg?sqp=-oaymwFBCPYBEIoBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AG-B4AC0AWKAgwIABABGH8gOygTMA8=&rs=AOn4CLAuf-VnR6Z2_dKhRuGh7ZyprnpS4w"}
                            link={"https://www.youtube.com/watch?v=ucPeQpzOHj8"}
                        />
                        <Project
                            key={"beat"}
                            title={"Beat to study to #1"}
                            description={"A lofi beat made while studying for studying"}
                            imageUrl={"https://i.ytimg.com/vi/CQwg5E6c90A/hqdefault.jpg?sqp=-oaymwFBCPYBEIoBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGH8gOig6MA8=&rs=AOn4CLDnvhwFjQc-myGcGmp0BIjk1JR2eQ"}
                            link={"https://www.youtube.com/watch?v=CQwg5E6c90A"}
                        />
                        <Project
                            key={"ruins"}
                            title={"Ruins"}
                            description={"A song made in reason using mostly real instruments testing recording settings"}
                            imageUrl={"https://i.ytimg.com/vi/CW8CQbgKv0Y/hqdefault.jpg?sqp=-oaymwFBCPYBEIoBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGEcgZShcMA8=&rs=AOn4CLC0lXDNwF3KRU_Je9yJPx50wGCq4Q"}
                            link={"https://www.youtube.com/watch?v=CW8CQbgKv0Y"}
                        />
                            </div>
                    <div id="yosesh" className="grid grid-cols-2 gap-8 mt-20">
                    <AudioPlayer Title="Good Intentions" src="Sommatif mix print.wav" defaultVolume={0.5} playbackRate={1} description="Drum session work for a friend's project" />
                    <AudioPlayer Title="Ones" src="one mic.mp3" defaultVolume={0.5} playbackRate={1} description="A song recorded using only one mic for every instrument"/>
                    <AudioPlayer Title="Caves" src="caves3.mp3" defaultVolume={0.5} playbackRate={1} description="A weird one"/>
                    <AudioPlayer Title="Highway" src="Highway.mp3" defaultVolume={0.5} playbackRate={1} description="A work in progress"/>

                    
                    </div>
                </section> 
            </div>
        </div>
    );
}
