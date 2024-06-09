import FiltersNSearch from "./filtersNSearch";
import Repos from "./repos";


export default function Projects() {

    return (
        <section className="mx-auto w-5/6 max-w-5xl flex flex-col items-center justify-center py-8">
            <h1 className="text-3xl">Personal Endeavors: A showcase of projects</h1>
            {/* <FiltersNSearch /> */}

            <div className="relative flex flex-wrap  gap-4 flex-col md:flex-row items-center justify-center py-8">
                <Repos />
            </div>
        </section>
    )
}