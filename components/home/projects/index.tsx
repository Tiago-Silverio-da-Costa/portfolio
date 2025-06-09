"use client";

import { motion } from "framer-motion";
import Repos from "./repos";
import { useLanguageStore } from "../context/languageContext";


export default function Projects() {
    const { texts } = useLanguageStore();

    return (
        <motion.section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            id="projects"
            aria-label="Seção de projetos desenvolvidos"
            className="flex flex-col items-center md:items-start justify-start py-32 bg-[#e6edf3]">
            <div className="mx-auto w-5/6 max-w-5xl">
                <h1 className="text-2xl md:text-3xl font-bold text-textTitle"> {texts.projects?.title || "Projetos:"}</h1>
                <Repos />
            </div>
        </motion.section>
    )
}