import { ReactChild, HeroContainer, NextChild, JSChild, JavaChild, TypeChild, HTMLChild, CSSChild, NodeChild, ExpressChild, PostgresChild, SqliteChild, RedisChild, PrismaChild, PythonChild, TailwindChild, StyledChild } from "@/styles/hero";

export default function System() {

    return (
        <section className="hidden max-w-5xl w-5/6 mx-auto md:flex justify-center">
        <HeroContainer $bg={`/me.jpeg`}>
            <ReactChild $icon={`/react.svg`} />
            <NextChild $icon={`/next.svg`} />
            <JSChild $icon={`/js.svg`} />
            <CSSChild $icon={`/css.svg`} />
            <TailwindChild $icon={`/tailwind.svg`} />
            <StyledChild $icon={`/styled.svg`} />
            <NodeChild $icon={`/node.svg`} />

            <JavaChild $icon={`/java.svg`} />
            <TypeChild $icon={`/types.svg`} />
            <HTMLChild $icon={`/html.svg`} />
            <ExpressChild $icon={`/ex.svg`} />
            <PostgresChild $icon={`/postgres.svg`} />
            <SqliteChild $icon={`/sqlite.svg`} />
            <RedisChild $icon={`/redis.svg`} />
            <PrismaChild $icon={`/prisma.svg`} />
            <PythonChild $icon={`/py.svg`} />
        </HeroContainer>
        </section>
    )
}