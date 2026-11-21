import { Link } from "react-router";
import PostAuthor from "./PostAuthor";

const PostCard = ({ post }) => {
  const shortDescription =
    post.desc.length > 150 ? `${post.desc.slice(0, 150)}...` : post.desc;
  const shortTitle =
    post.title.length > 30 ? `${post.title.slice(0, 30)}...` : post.title;

  return (
    <article className="card h-full min-w-0 overflow-hidden bg-base-100 shadow-sm">
      <figure className="aspect-video w-full">
        <img
          className="h-full w-full object-cover"
          src={post.thumbnail}
          alt={post.title}
        />
      </figure>
      <div className="card-body min-w-0 flex-1">
        <Link to={`/posts/${post.id}`}>
          <h2 className="card-title break-words link-hover">{shortTitle}</h2>
        </Link>

        <p className="line-clamp-4 break-words">{shortDescription}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
          <PostAuthor id={post.authorId} />
          <Link to={`/posts/categories/${post.category}`}>
            <div className="badge badge-outline">{post.category}</div>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
