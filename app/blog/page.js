import Layout from "@/components/Layout";
import AllPosts from "@/components/posts/AllPosts";
import { Suspense } from "react";

export const metadata = {
  title: "Tous les articles",
  description: "Je suis heureuse de vous accueillir dans mon univers , où l'écriture est devenue un pilier essentiel de ma vie. Je nous souhaite beaucoup de positif, de sérénité et des souvenirs mémorables. Cheers !",
};

const AllBlog = () => {
  const postsPerPage = 8;

  return (
    <Suspense
      fallback={
        <div className="text-xl text-dark font-primary font-bold fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Loading...
        </div>
      }
    >
      <Layout>
        <AllPosts postsPerPage={postsPerPage} />
      </Layout>
    </Suspense>
  );
};

export default AllBlog;
