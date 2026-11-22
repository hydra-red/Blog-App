import { Link } from "react-router";
import PostCard from "./PostCard.jsx";
import { DUMMY_POSTS } from "./postsData.js";

export default function Posts() {
  if (DUMMY_POSTS.length <= 0) {
    return (
      <section className="mx-auto my-12 w-full max-w-7xl px-4 text-center">
        <h1 className="text-2xl font-bold sm:text-4xl">No posts found</h1>
        <Link className="btn btn-primary mt-5" to="/create">
          Create post
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto my-6 grid w-full max-w-7xl grid-cols-1 items-stretch gap-4 px-4 sm:grid-cols-2 sm:gap-5 sm:px-6 lg:px-8 xl:grid-cols-3">
      {DUMMY_POSTS.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </section>
  );
}
