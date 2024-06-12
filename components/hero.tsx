"use client";

import { TypeAnimation } from 'react-type-animation';
import System from './system';
import Image from 'next/image';
import TechsSliderTopDown from './techsSliderTopDown';
import TechsSliderDownTop from './techsSliderDownTop';

export default function Hero() {

    return (
        <section>
            <div className="mx-auto w-5/6 max-w-5xl md:pt-8 py-8 md:pb-40 flex flex-col gap-8 md:gap-40 justify-center items-center">
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        `Hello! I'm Tiago S. C.`,
                        2000,
                        `Hello! I'm Software Engineer`,
                        2000,
                    ]}
                    wrapper="p"
                    deletionSpeed={1}
                    style={{ fontSize: '4rem', lineHeight: '4.25rem', fontWeight: '700' }}
                    repeat={Infinity}
                />
                <div className="flex md:hidden flex-col items-center justify-center gap-4">
                    <Image src="/hero/me.jpeg" alt="Tiago" width={200} height={200} className="rounded-full" />
                    <TechsSliderTopDown />
                    <TechsSliderDownTop />
                </div>
                <System />
            </div>
        </section>
    )
}