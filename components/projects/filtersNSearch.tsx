import Search from "./search";
import Sort, { TFilterOptions } from "./sort";

export default function FiltersNSearch(
    
) {

    // const { sort, perPage } = paginationParams;
    // const filterMenuOptions: TFilterOptions[] = [
    //     {
    //         label: "Ordernar por",
    //         slug: "sort",
    //         selected:
    //             sort == "last" || sort == "name" ? sort : "last",
    //         options: {
    //             last: "Last updated",
    //             name: "Name",
    //         },
    //     },
    //     {
    //         label: "Type",
    //         slug: "sort",
    //         selected:
    //             sort == "frontend" || sort == "backend" || sort == "fullstack" || sort == "mobile" || sort == "game" ? sort : "fullstack",
    //         options: {
    //             fullstack: "Full-stack",
    //             frontend: "Front-end",
    //             backend: "Back-end",
    //             mobile: "mobile",
    //             game: "Games"
    //         },
    //     },
    // ];


    return (
        <div className="flex flex-col md:flex-row gap-6 items-end md:items-center mx-auto w-5/6 max-w-5xl">
            <Search />
            <Sort 
            // menuOptions={filterMenuOptions} 
            />
        </div>
    )
}