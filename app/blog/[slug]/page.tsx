import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getBlogPost } from "@/lib/api";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function getStaticProps({ params }: GetStaticProps) {
  const post = await getBlogPost(params.slug);
  return { props: { post } };
}

export default function BlogPost({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
