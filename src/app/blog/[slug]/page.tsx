import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
// import Header from "@/app/_components/header";
import { PostBody } from "@/components/Blog Components/post-body";
import DesktopDefaultPageFormat from "@/components/Templates/DesktopDefaultPageFormat";
import BlogHeader from "@/components/Blog Components/blog-header";
import BlogFooter from "@/components/Blog Components/blog-footer";
// import { PostHeader } from "@/components/Blog Components/post-header";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = post.content; //await markdownToHtml(post.content || "");

  return (
    <main>
      {/* <Alert preview={post.preview} /> */}
      <DesktopDefaultPageFormat>
        <BlogHeader title={post.title} date={post.date} />
        <article className="flex justify-center">
          <PostBody content={content} />
        </article>
        <BlogFooter />
      </DesktopDefaultPageFormat>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | blog post`;

  return {
    title,
    openGraph: {
      title,
      images: [post.coverImage],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
