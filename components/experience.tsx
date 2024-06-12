"use client";

import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";


export default function Experience() {
    const [showMore, setShowMore] = useState<boolean>(false);
    const [selectedJob, setSelectedJob] = useState<number | null>(null);

    const jobs = [
        {
            title: "Software Engineer at MBL",
            period: "2023 (Apr.) - 2024 (Apr.)",
            details: `
                As a full-stack developer at MBL, I had the opportunity to create dozens of websites with thousands of hits, using a diverse set of technologies. My experience spans both front-end and back-end development, allowing me to hone my technical skills and develop expertise in delivering effective and impactful web solutions.
                <br /><br />
                Here are the key aspects of my journey as a developer:
                <br /><br />
                <strong>Front-end:</strong>
                <br /><br />
                <ul className="list-disc list-inside">
                    <li>Utilized React/Next.js to create interactive and responsive user interfaces.</li>
                    <li>Worked with Styled-components/Tailwind to style components.</li>
                    <li>Ensured websites were compliant with HTML5/CSS3 standards.</li>
                </ul>
                <br /><br />
                <strong>Back-end:</strong>
                <br /><br />
                <ul className="list-disc list-inside">
                    <li>Implemented server logic using Next.js/Node.js.</li>
                    <li>Used Prisma to interact with PostgreSQL databases.</li>
                    <li>Managed data and efficient queries.</li>
                </ul>
                <br /><br />
                <strong>Design and Tools:</strong>
                <br /><br />
                <ul className="list-disc list-inside">
                    <li>As part of my creative process, used Adobe Photoshop & Illustrator to create/edit attractive and impactful designs.</li>
                    <li>Applied knowledge in Git for version control and team collaboration.</li>
                </ul>
                <br /><br />
                <strong>Infrastructure and Cloud:</strong>
                <br /><br />
                Hosted static files on AWS S3.
            `
        },
        {
            title: "Internship at Brazilian government",
            period: "2022 (Feb.) - 2022 (Dec.)",
            details: `
                As a full-stack developer on the SNEAR project for the Ministry of Sports, I leveraged modern technologies to create an engaging platform.
                <br /><br />
                Here are the key aspects of my journey as a developer:
                <br /><br />
                <strong>Front-end:</strong>
                <br /><br />
                <ul className="list-disc list-inside">
                    <li>Developed interactive, responsive user interfaces with React.</li>
                    <li>Ensured a smooth and attractive user experience.</li>
                </ul>
                <br /><br />
                <strong>Back-end:</strong>
                <br /><br />
                <ul className="list-disc list-inside">
                    <li>Implemented server logic with TypeScript.</li>
                    <li>Used TypeORM for efficient database management.</li>
                </ul>
                <br /><br />
                <strong>User Experience Focus:</strong>
                <br /><br />
                <ul className="list-disc list-inside">
                    <li>Connected fans with athletes, delivering an intuitive and engaging experience.</li>
                </ul>
                <br /><br />
                This project allowed me to enhance my skills across multiple areas of development, from UI creation to data management. I am continually improving and excited to tackle new challenges as a full-stack developer!
            `
        }
    ];

    return (
        <section id="experience" className="mx-auto w-5/6 max-w-5xl py-8">
                <h1 className="text-3xl font-bold text-textTitle">
                    Where I&apos;ve worked and what I&apos;ve done
                </h1>
                <div className="flex flex-col md:flex-row gap-4 items-start mt-12">

                    <div className={`${selectedJob === null ? "w-full" : "w-fit"} flex gap-4 flex-row md:flex-col`}>
                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedJob(selectedJob === index ? null : index)}
                                className="bg-highlightElement border border-borderColor rounded-md p-4 flex flex-col hover:bg-highlightElement/80 cursor-pointer transition-all duration-200">
                                <div className="flex flex-col">
                                    <h2 className="text-xl font-bold">{job.title}</h2>
                                    <p className="hidden md:block text-lg tracking-wide leading-6 font-medium max-w-xl">
                                        {job.period}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={`${selectedJob === null ? "hidden" : "block"} p-4 border border-borderColor rounded-md`}>
                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                className={`text-lg tracking-wide leading-6 font-medium max-w-xl ${selectedJob === index ? 'block' : 'hidden'} `}>

                                <div dangerouslySetInnerHTML={{ __html: job.details }} className={!showMore ? 'line-clamp-3' : 'line-clamp-none'} />
                            </div>
                        ))}

                        <div onClick={() => setShowMore(!showMore)} className="select-none cursor-pointer text-highlightText flex gap-1 items-center mt-2 w-fit">
                            <TiArrowSortedDown className="text-xl" />
                            <span className="text-sm tracking-wide leading-6 font-medium max-w-xl">
                                {
                                    showMore ? `Show less` : `Show more`
                                }
                            </span>
                        </div>
                    </div>
                </div>
        </section>
    )
}