
import Link from "next/link";
import { DeletePost } from "./deletePost";
import { CreatePost } from "./createPost";
import EditPost from "./editPost";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/adapter/nextAuth";
import Image from "next/image";

export default async function Header({ id }: { id?: string }) {
  const session = await getServerSession(authOptions)

  return (
    <section className="bg-[hsla(0,0%,100%,.5)] border border-[hsla(0,0%,100%,.5)] w-full">
      <div className="flex justify-between items-center mx-auto w-5/6 max-w-5xl py-4">
        <Link href="/" aria-label="Logo do Tiago Costa" className="flex items-center gap-2">
          <Image className="rounded-full" src="/home/header/logo.svg" alt="" width={50} height={80} />
          <h1 className="hidden md:block text-lg font-bold text-textTitle uppercase">Programador</h1>
        </Link>
        <div className="flex items-center gap-4">
          {!id && session && (
            <CreatePost />
          )}
          {id && session && (
            <>
              <DeletePost id={id} />
              <EditPost id={id} />
            </>
          )}

        </div>
      </div >
    </section >
  )
}