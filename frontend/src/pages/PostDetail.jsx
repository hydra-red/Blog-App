import { Link, useParams } from "react-router";
import PostAuthor from "../components/posts/PostAuthor.jsx";
import { DUMMY_POSTS } from "../components/posts/postsData.js";

const PostDetail = () => {
  const { id } = useParams();
  const post = DUMMY_POSTS.find((item) => item.id === Number(id));

  if (!post) {
    return (
      <main className="mx-auto w-full max-w-5xl px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link className="btn btn-primary mt-4" to="/">
          Back to posts
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-6 sm:py-10">
      <article className="overflow-hidden rounded-2xl bg-base-100 shadow-sm">
        <figure className="w-full">
          <img
            className="block aspect-video w-full object-cover"
            src={post.thumbnail}
            alt={post.title}
          />
        </figure>

        <div className="space-y-6 p-5 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <PostAuthor id={post.authorId} />
            <Link
              className="badge badge-outline w-fit"
              to={`/posts/categories/${post.category}`}
            >
              {post.category}
            </Link>
          </div>

          <header className="space-y-4">
            <h1 className="break-words text-3xl font-bold sm:text-4xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              <Link
                className="btn btn-primary btn-sm"
                to={`/posts/${post.id}/edit`}
              >
                Edit post
              </Link>
              <Link className="btn btn-ghost btn-sm" to="/">
                All posts
              </Link>
            </div>
          </header>

          <p className="break-words whitespace-pre-wrap text-base leading-7 text-base-content/80">
            {post.desc.trim()}
          </p>
        </div>
      </article>
    </main>
  );
};

export default PostDetail;
