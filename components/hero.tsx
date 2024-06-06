import { ReactChild, HeroContainer, NextChild, JSChild } from "@/styles/hero";

export default function Hero() {

    return (
        <HeroContainer $bg={`/me.jpeg`}>
            <ReactChild $icon={`/react.svg`}/>
            <NextChild $icon={`/next.svg`}/>
            <JSChild $icon={`/js.svg`}/>
        </HeroContainer>
    )
}