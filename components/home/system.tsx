import { ReactChild, HeroContainer, NextChild, JSChild, JavaChild, TypeChild, HTMLChild, CSSChild, NodeChild, ExpressChild, PostgresChild, SqliteChild, RedisChild, PrismaChild, PythonChild, TailwindChild, StyledChild, GoChild } from "@/styles/home/hero";
import { motion } from "framer-motion";

export default function System() {

    return (
        <motion.section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden max-w-5xl w-5/6 mx-auto lg:flex items-center justify-center">
            <HeroContainer $bg={`/home/contact/look.jpg`}>
                <ReactChild $icon={`/home/hero/react.svg`} />
                <NextChild $icon={`/home/hero/next.svg`} />
                <JSChild $icon={`/home/hero/js.svg`} />
                <CSSChild $icon={`/home/hero/css.svg`} />
                <TailwindChild $icon={`/home/hero/tailwind.svg`} />
                <StyledChild $icon={`/home/hero/styled.svg`} />
                <NodeChild $icon={`/home/hero/node.svg`} />

                <JavaChild $icon={`/home/hero/java.svg`} />
                <TypeChild $icon={`/home/hero/types.svg`} />
                <HTMLChild $icon={`/home/hero/html.svg`} />
                <ExpressChild $icon={`/home/hero/ex.svg`} />
                <PostgresChild $icon={`/home/hero/postgres.svg`} />
                <SqliteChild $icon={`/home/hero/sqlite.svg`} />
                <RedisChild $icon={`/home/hero/redis.svg`} />
                <PrismaChild $icon={`/home/hero/prisma.svg`} />
                <PythonChild $icon={`/home/hero/py.svg`} />
                <GoChild $icon={`/home/hero/go.svg`} />
            </HeroContainer>
        </motion.section>
    )
}