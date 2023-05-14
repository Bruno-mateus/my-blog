import Image from "next/image";
import Link from "next/link";

interface PostProps {
  title: string;
  image: string;
  content: string;
  postId: string;
}

export function Post({ content, image, title, postId }: PostProps) {
  return (
    <div>
      <Link
        href={`/post/${postId}`}
        className="flex max-w-3xl h-32 items-center m-auto  gap-2"
      >
        <Image
          className=" hidden md:block h-full object-cover "
          src={image}
          alt="cover"
          width={200}
          height={150}
        />
        <div>
          <h2 className=" overflow-hidden line-clamp-1 text-ellipsis text-1xl md:text-2xl dark:text-gray-100">
            {title}
          </h2>
          <p className="border-b-2 text-gray-600 line-clamp-4  border-gray-300 text-ellipsis leading-6 overflow-hidden  dark:border-gray-700 dark:text-gray-400">
            {content}
          </p>
        </div>
      </Link>
    </div>
  );
}
