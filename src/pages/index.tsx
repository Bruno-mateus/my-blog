import { Button } from "@/components/Button";
import { Post } from "@/components/Post";
import { Container } from "@/components/Container";
import { GetStaticProps } from "next";
import { useQuery } from "@tanstack/react-query";
import { getFilteredPost, getPosts } from "@/api";

import { useState } from "react";
import { PostData } from "@/types";
import { Loading } from "@/components/Loading";

export default function Home({ posts }: { posts: PostData[] }) {
  const [queryFilterPosts, setQueryFilterPosts] = useState<string>("");

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
    staleTime: 30000,
  });

  const {
    data: filteredPosts,
    isFetching: isFetchingFilter,
    isLoading: isLoadingFilter,
    refetch,
  } = useQuery<PostData[]>({
    queryKey: ["filteredPosts", queryFilterPosts],
    queryFn: async () => await getFilteredPost(queryFilterPosts),
    initialData: [] as PostData[],
    refetchOnWindowFocus: false,
    enabled: false,
    keepPreviousData: true,
    staleTime: 30000,
  });

  return (
    <>
      <Container>
        <form
          className="flex"
          onSubmit={(e) => {
            e.preventDefault();
            refetch();
          }}
        >
          <input
            type="search"
            placeholder="Pesquise um post"
            className="w-full rounded-s-lg p-4 bg-gray-300 dark:bg-gray-800"
            onChange={(e) => setQueryFilterPosts(e.target.value)}
          />
          <Button
            className="bg-gray-950 rounded-e-lg text-gray-100"
            title="Pesquisar"
          />
        </form>
        {isLoading || isFetching || isFetchingFilter || isLoadingFilter ? (
          <Loading />
        ) : (
          <section className="mt-8 flex flex-col gap-10">
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
          </section>
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
    revalidate: 60 * 60 * 6,
  };
};
