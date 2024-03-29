import { Button } from "@/components/Button";
import { Post } from "@/components/Post";
import { Container } from "@/components/Container";
import { GetStaticProps } from "next";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/api";

import { useState } from "react";
import { PostData } from "@/types";
import { Loading } from "@/components/Loading";
import { usePagination } from "@/hooks/usePagination";

export default function Home({ posts }: { posts: PostData[] }) {
  const [filteredPosts, setFilteredPosts] = useState<PostData[]>([]);

  const {
    isLoading,
    data: postsData,
    isFetching,
  } = useQuery<PostData[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
    initialData: posts,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  function handleSearch(query: string) {
    setFilteredPosts(
      postsData.filter((post) =>
        post.attributes.title.toLowerCase().includes(query.toLocaleLowerCase())
      )
    );
  }

  return (
    <>
      <Container>
        <form className="flex">
          <input
            type="search"
            placeholder="Pesquise um post"
            className="w-full rounded-lg p-4 bg-gray-300 dark:bg-gray-800"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </form>

        {isLoading || isFetching ? (
          <Loading />
        ) : (
          <div className="mt-8 flex flex-col gap-10">
            {filteredPosts.length > 0
              ? filteredPosts.map((post) => {
                  return (
                    <Post
                      key={post.id}
                      postId={post.id.toString()}
                      title={post.attributes.title}
                      content={post.attributes.description}
                      image={
                        post.attributes.cover.data.attributes.formats.small.url
                      }
                    />
                  );
                })
              : postsData.map((post) => {
                  return (
                    <Post
                      key={post.id}
                      postId={post.id.toString()}
                      title={post.attributes.title}
                      content={post.attributes.description}
                      image={
                        post.attributes.cover.data.attributes.formats.small.url
                      }
                    />
                  );
                })}
          </div>
        )}
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
    revalidate: 60 * 10,
  };
};
