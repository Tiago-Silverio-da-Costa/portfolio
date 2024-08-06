"use client"; 

import { usePathname } from "next/navigation";
import Image from "next/image";

const ArticleImage = ({ image }: { image: string }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/blog" ? (
        <Image className="w-full" src={image} alt="" width={1200} height={300} />
      ) : (
        <div className="relative w-full h-96 overflow-hidden">
          <Image
            className="absolute top-[-50px] left-0 w-auto h-auto min-w-full min-h-full"
            src={image}
            alt=""
            width={1200}
            height={300}
          />
        </div>
      )}
    </>
  );
};

export default ArticleImage;
