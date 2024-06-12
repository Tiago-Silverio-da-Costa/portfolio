import FiltersNSearch from "./filtersNSearch";
import Repos from "./repos";


export default function Projects() {

    return (
        <section id="projects" className="mx-auto w-5/6 max-w-5xl flex flex-col items-center md:items-start justify-center py-8">
            <h1 className="text-3xl font-bold">Personal Endeavors: A showcase of projects</h1>
            <Repos />
        </section>
    )
}