import BlogCategories from "@/components/blog/BlogCategories";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedBlog from "@/components/blog/FeaturedBlog";

const BlogPage = () => {
  return (
    <>
      <BlogHero />
      <FeaturedBlog />
      <BlogGrid />
      <BlogCategories />
    </>
  );
};

export default BlogPage;