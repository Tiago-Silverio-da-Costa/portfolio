"use client";

import { motion } from "framer-motion";
import Repos from "./repos";


export default function Projects() {

    return (
        <motion.section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            id="projects"
            className="mx-auto w-5/6 max-w-5xl flex flex-col items-center md:items-start justify-start py-8 h-full">
            <h1 className="text-2xl md:text-3xl font-bold text-textTitle">Projetos Pessoais: Uma vitrine de realizações</h1>
            <Repos />
        </motion.section>
    )
}