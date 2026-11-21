import { useState } from "react";
import Posts from "../components/posts/posts";
import PostCard from "../components/posts/PostCard";
import { DUMMY_POSTS } from "../components/posts/postsData.js";
import { useParams } from "react-router";

const AuthorPosts = () => {
  const {id} = useParams()
  const [posts, setPosts] = useState(DUMMY_POSTS.filter((post)=> post.authorId == id));

  console.log()

  return (
  
    <section className="mx-auto my-6 grid w-full max-w-7xl grid-cols-1 items-stretch gap-4 px-4 sm:grid-cols-2 sm:gap-5 sm:px-6 lg:px-8 xl:grid-cols-3">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </section>
  );
};

export default AuthorPosts;
