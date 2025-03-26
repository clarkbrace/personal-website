import PostPreview from "@/components/Blog Components/post-preview";
import DesktopDefaultPageFormat from "@/components/Templates/DesktopDefaultPageFormat";
import { getAllPosts } from "@/lib/api";

function Blog() {
  const blogposts = getAllPosts();

  return (
    <DesktopDefaultPageFormat>
      <div className="flex justify-center">
        {blogposts.map((post) => (
          <PostPreview
            title={post.title}
            slug={post.slug}
            coverImage={post.coverImage}
            excerpt={post.excerpt}
            date={post.date}
          />
        ))}
      </div>
    </DesktopDefaultPageFormat>
  );
}

export default Blog;
