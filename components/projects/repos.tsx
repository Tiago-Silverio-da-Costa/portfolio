import Image from "next/image"
import { FaGithub } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

export default  function Repos() {
    return (
        <div className="group relative">
            <div className="transition-all duration-300 flex items-center justify-center gap-4 group-hover:absolute group-hover:w-full group-hover:h-full group-hover:bg-borderColor/50 ">
                <a href="" target="_blank" className="hidden group-hover:flex border bg-borderColor p-2 rounded-full text-2xl">
                    <FaGithub />
                </a>
                <a href="" target="_blank" className="hidden group-hover:flex border bg-borderColor p-2 rounded-full text-xl">
                    <FaRocket />
                </a>
            </div>
            <Image className="rounded-tl-md rounded-tr-md" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbThzb255OXM2ZDUxN3JuN3FiM2duOWsyNzJpenk3a2xiZGRyMnhqNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tXL4FHPSnVJ0A/giphy.webp" alt="" width={410} height={400} />
            <div className="rounded-bl-md rounded-br-md bg-borderColor flex items-center w-full h-6 px-2">
                <div className="flex items-center gap-2 justify-start">
                    <div className="flex rounded-full w-2 h-2 bg-highlightElement"></div> 
                    {/* change dot color */}
                    <p className="text-xs text-textOpacity tracking-tighter">Typescript</p>
                </div>
            </div>
        </div>
    )
}