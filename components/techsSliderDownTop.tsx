"use client";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "@/styles/swiper.css";
import Image from "next/image";
import { Fragment } from "react";


interface AboutProps {
    image: string;
    id: number;
}

export default function TechsSliderDownTop() {


    const aboutList: AboutProps[] = [
        {
            id: 1,
            image: "/hero/css.svg",
        },
        {
            id: 2,
            image: "/hero/ex.svg",
        },
        {
            id: 3,
            image: "/hero/html.svg",
        },
        {
            id: 4,
            image: "/hero/java.svg",
        },
        {
            id: 5,
            image: "/hero/js.svg",
        },
        {
            id: 6,
            image: "/hero/next.svg",
        },
        {
            id: 7,
            image: "/hero/node.svg",
        },
        {
            id: 8,
            image: "/hero/postgres.svg",
        }
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            loop={true}
            slidesPerView={4}
            spaceBetween={30}
            keyboard={true}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            dir="rtl"
            className="mySwiper"
        >
            {aboutList.map((about) => (
                <Fragment key={about.id}>
                    <SwiperSlide className="select-none">
                        <Image className="bg-bgGray shadow-sm p-2 md:p-4 my-1 rounded-full" src={about.image} alt="techs" width={65} height={65} />
                    </SwiperSlide>
                </Fragment>
            ))}
        </Swiper>
    );
}