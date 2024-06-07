import { ReactChild, HeroContainer, NextChild, JSChild, JavaChild, TypeChild, HTMLChild, CSSChild, NodeChild, ExpressChild, PostgresChild } from "@/styles/hero";

export default function Hero() {

    return (
        <HeroContainer $bg={`/me.jpeg`}>
            <ReactChild $icon={`/react.svg`} />
            <NextChild $icon={`/next.svg`} />
            <JSChild $icon={`/js.svg`} />
            <CSSChild $icon={`/css.svg`} />
            <NodeChild $icon={`/node.svg`} />

            <JavaChild $icon={`/java.svg`} />
            <TypeChild $icon={`/types.svg`} />
            <HTMLChild $icon={`/html.svg`} />
            <ExpressChild $icon={`/ex.svg`} />
            <PostgresChild $icon={`/postgres.svg`} />
        </HeroContainer>
    )
}