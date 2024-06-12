import Image from "next/image";
import Contact from "./contact";
import Education from "./education";

export default function About() {

    return (
        <section id="about" className="mx-auto w-5/6 max-w-5xl flex flex-col py-8">
            <h1 className="text-3xl font-bold">
                Know me better
            </h1>
            <div className="border-b border-b-borderColor flex flex-col-reverse md:flex-row gap-4 items-start justify-between py-4">
                <p className="text-lg tracking-wide leading-6 font-medium max-w-xl">
                    Hello, my name&apos;s Tiago. I&apos;m a software engineer, and I&apos;d like to share a bit about myself and why I chose to work with technology.
                    <br />
                    <br />
                    Ever since I can remember, I have loved building things. One of my favorite activities was pretending to be a mad scientist, like Princess mononoke poster. This passion for creating and experimenting led me to pursue a career in programming.
                    <br />
                    <br />
                </p>
                <Image src="https://gifdb.com/images/high/dexter-s-laboratory-dexter-shower-dance-7j4owciogaizx5a0.gif" alt="Dexter from Dexter's Laboratory" className="rounded-md" width={400} height={400} />

            </div>

            <div className="flex flex-col lg:flex-row gap-6 py-6 border-b border-b-borderColor">
                <div className="flex flex-col-reverse md:flex-col gap-4 justify-between items-start">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">Music</h1>
                        <p className="text-lg tracking-wide font-medium max-w-xl leading-6">
                            I&apos;d like to share a bit about my tastes in music. I enjoy a variety of music genres, especially rock, which I started getting into last year. Some of my favorite bands are Alice in Chains, Megadeth, Metallica, Black Sabbath, System of a Down, Iron Maiden, and Led Zeppelin.  I also enjoy 90s hip hop, Jazz, classical music and Blues too.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-start gap-2">
                        <Image src="https://imgs.search.brave.com/b0fATC4lU3SwMmJSPK3fEHLYmUOO_9CIxHS7ZEp4WiQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzg5LzIwOS8x/NjcvYXJ0d29yay1k/YXJrLWVkZGllLWV2/aWwtd2FsbHBhcGVy/LXByZXZpZXcuanBn" alt="Iron maiden poster" className="rounded-md" width={100} height={100} />
                        <Image src="https://m.media-amazon.com/images/I/71MT2hjHBvL.__AC_SX300_SY300_QL70_ML2_.jpg" alt="System of a down poster" className="rounded-md" width={100} height={100} />
                        <Image src="https://consequence.net/wp-content/uploads/2022/09/Alice-in-Chains-Dirt.jpg?quality=80" alt="Alice in chains poster" className="rounded-md" width={100} height={100} />
                        <Image src="https://lastfm.freetls.fastly.net/i/u/500x500/ee96a244a9bd33a3978ca1ff34d80483.jpg" alt="Megadeth poster" className="rounded-md" width={100} height={100} />
                    </div>
                </div>

                <div className="flex flex-col-reverse md:flex-col gap-4 justify-between items-start">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">Movies</h1>
                        <p className="text-lg tracking-wide font-medium max-w-xl leading-6">
                            When it comes to movies, I have diverse tastes as well. Some of my favorites are Pulp Fiction, Princess Mononoke, Spirited Away, Fight Club, Dances with Wolves, The Thing, and Monster.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-start gap-2">
                        <Image src="https://imgs.search.brave.com/rdcut5ziykPHzPsohDb87ErU2dnh-xb6b9nx5ZakOCs/rs:fit:860:0:0/g:ce/aHR0cDovL3d3dy5p/bXBhd2FyZHMuY29t/LzE5OTQvcG9zdGVy/cy9wdWxwX2ZpY3Rp/b24uanBn" alt="Pulp fiction poster" className="rounded-md" width={100} height={100} />
                        <Image src="https://m.media-amazon.com/images/I/51Xl0K7PlUL.jpg" alt="Princess mononoke poster" className="rounded-md" width={100} height={100} />
                        <Image src="https://m.media-amazon.com/images/I/51OKMqB5ykL.jpg" alt="Fight club poster" className="rounded-md" width={100} height={100} />
                        <Image src="https://m.media-amazon.com/images/I/51pFfe542DL.jpg" alt="Dances with wolves poster" className="rounded-md" width={100} height={100} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 py-6 ">
                <Education />
                <Contact />
            </div>


        </section>
    )
}