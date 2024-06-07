"use client";

import { TypeAnimation } from 'react-type-animation';
import System from './system';

export default function Hero() {

    return (
        <section>
            <div className="mx-auto w-5/6 max-w-5xl py-8 flex flex-col gap-40 justify-center items-center">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        `Hello, visitor! I'm Tiago S. C. `,
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        `Hello, visitor! I'm Software Engineer`,
                        1000,
                    ]}
                    wrapper="span"
                    speed={2}
                    deletionSpeed={2}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
                <System />
            </div>
        </section>
    )
}