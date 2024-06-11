"use client";

import { TypeAnimation } from 'react-type-animation';
import System from './system';

export default function Hero() {

    return (
        <section>
            <div className="mx-auto w-5/6 max-w-5xl pt-8 pb-40 flex flex-col gap-40 justify-center items-center">
                <div className="flex gap-2 items-center">
                    <p className="text-2xl font-bold">Hello, visitor! I&apos;m </p>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            `Tiago S. C.`,
                            2000, 
                            `Software Engineer`,
                            2000, 
                        ]}
                        wrapper="p"
                        deletionSpeed={1}
                        style={{ fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '700', color: '#39d353' }}
                        repeat={Infinity}
                    />
                </div>

                <System />
            </div>
        </section>
    )
}