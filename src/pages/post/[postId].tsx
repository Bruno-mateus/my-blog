import { Container } from "@/components/Container";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";

import { getPosts, getAPost } from "@/api";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PostData } from "@/types";
import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

type Params = {
  postId: string | undefined;
};

export default function Post({ post }: { post: PostData }, isLoading: boolean) {
  return (
    <>
      <NextSeo
        title={`${post.attributes.title} | Bruno Mateus Dev`}
        description={`${post.attributes.description}`}
      />

      <Container className="flex flex-col items-center">
        {!post ? (
          <Loading />
        ) : (
          <>
            <h1 className="text-2xl text-center md:text-3xl">
              {post.attributes.title}
            </h1>
            <small>
              {format(new Date(post.attributes.createdAt), "PPPP", {
                locale: ptBR,
              })}
            </small>
            <Image
              className=" h-full object-cover mt-8 "
              src={post.attributes.cover.data.attributes.url}
              alt="cover"
              width={400}
              height={350}
            />
            <div className="  p-0 md:pl-20 w-full md:pr-20 pt-8 dark:text-gray-100 leading-loose">
              <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
            </div>
          </>
        )}
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = (await getPosts()) as PostData[];
  const paths = response.map((post) => ({
    params: {
      postId: post.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { postId } = params as Params;

  const post = await getAPost(postId);
  return {
    props: {
      post,
    },
    revalidate: 60 * 10,
  };
};
