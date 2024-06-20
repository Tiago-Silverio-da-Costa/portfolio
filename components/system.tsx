import { ReactChild, HeroContainer, NextChild, JSChild, JavaChild, TypeChild, HTMLChild, CSSChild, NodeChild, ExpressChild, PostgresChild, SqliteChild, RedisChild, PrismaChild, PythonChild, TailwindChild, StyledChild, GoChild } from "@/styles/hero";
import { motion } from "framer-motion";

export default function System() {

    return (
        <motion.section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden max-w-5xl w-5/6 mx-auto lg:flex items-center justify-center">
            <HeroContainer $bg={`/hero/me.jpeg`}>
                <ReactChild $icon={`/hero/react.svg`} />
                <NextChild $icon={`/hero/next.svg`} />
                <JSChild $icon={`/hero/js.svg`} />
                <CSSChild $icon={`/hero/css.svg`} />
                <TailwindChild $icon={`/hero/tailwind.svg`} />
                <StyledChild $icon={`/hero/styled.svg`} />
                <NodeChild $icon={`/hero/node.svg`} />

                <JavaChild $icon={`/hero/java.svg`} />
                <TypeChild $icon={`/hero/types.svg`} />
                <HTMLChild $icon={`/hero/html.svg`} />
                <ExpressChild $icon={`/hero/ex.svg`} />
                <PostgresChild $icon={`/hero/postgres.svg`} />
                <SqliteChild $icon={`/hero/sqlite.svg`} />
                <RedisChild $icon={`/hero/redis.svg`} />
                <PrismaChild $icon={`/hero/prisma.svg`} />
                <PythonChild $icon={`/hero/py.svg`} />
                <GoChild $icon={`/hero/go.svg`} />
            </HeroContainer>
        </motion.section>
    )
}