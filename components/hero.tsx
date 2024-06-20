"use client";

import System from './system';
import Image from 'next/image';
import TechsSliderTopDown from './techsSliderTopDown';
import TechsSliderDownTop from './techsSliderDownTop';

export default function Hero() {

    return (
        <section>
            <div className="mx-auto w-5/6 max-w-5xl flex flex-col md:flex-row item-center py-8">
                <div className="w-full md:py-8 md:pb-40 flex gap-4 justify-between items-center">

                    <div className="flex flex-col gap-2 justify-start">
                        <div className="flex flex-col">
                            <span className="font-medium text-defaultText text-lg md:text-2xl uppercase tracking-wider"
                            >Hi, my name is</span>
                            <h1 className="text-4xl md:text-6xl text-textTitle font-bold uppercase tracking-wide max-w-48">Tiago Costa</h1>
                        </div>
                        <span className="text-defaultText text-start text-sm md:text-lg max-w-md leading-6 tracking-wide">
                            Web Developer
                        </span>
                    </div>
                    <div className="relaive z-10 flex  flex-col items-center justify-center gap-4 mt-36">
                        <System />
                    </div>

                    <div className="hidden md:flex flex-col items-center gap-4">
                        <div className="flex flex-col items-center justify-end">
                            <p className="text-2xl md:text-4xl text-defaultText font-bold uppercase tracking-wide">
                                2+
                            </p>
                            <span className="text-defaultText text-center text-sm max-w-md leading-6 tracking-wide">Years of experience</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-2xl md:text-4xl text-defaultText font-bold uppercase tracking-wide">
                                50+
                            </p>
                            <span className="text-defaultText text-center text-sm max-w-md leading-6 tracking-wide">Projects completed</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-2xl md:text-4xl text-defaultText font-bold uppercase tracking-wide">
                                5,000+
                            </p>
                            <span className="text-defaultText text-center text-sm max-w-md leading-6 tracking-wide">Hours of work</span>
                        </div>

                    </div>
                </div>
                <div className="md:hidden relaive z-10 flex  flex-col items-center justify-center gap-4 mt-2">
                    <Image src="/hero/me.jpeg" alt="Tiago" width={200} height={200} className="rounded-full" />
                    <TechsSliderTopDown />
                    <TechsSliderDownTop />
                </div>
            </div>

        </section>
    )
}