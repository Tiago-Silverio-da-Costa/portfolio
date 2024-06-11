import Image from 'next/image'

export default function Education() {

    return (
        <section className="flex flex-col items-start justify-start gap-4">
            <h1 className="text-2xl font-bold">
                Where I Studied?
            </h1>
            <div className="flex items-center gap-4">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Instituto_Federal_Catarinense_-_Marca_Vertical_2015.svg" alt="Dexter from Dexter's Laboratory" className="rounded-md bg-white py-2" width={100} height={100} />
                <div className="flex flex-col items-stretch">
                    <h2 className="text-xl font-semibold max-w-96">Instituto Federal Catarinense - Campus Camboriú</h2>
                    <p className="text-sm tracking-wide font-medium max-w-xl">
                        Degree: Technician in Informatics
                    </p>
                    <p className="text-sm tracking-wide font-medium max-w-xl">
                        Duration: 2020 - 2022
                    </p>
                </div>

            </div>
        </section>
    )
}