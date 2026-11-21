import { Link } from "react-router";

const PostAuthor = ({ id }) => {
  return (
    <Link
      className="flex min-w-0 items-center gap-3 rounded-lg"
      to={`/posts/user/${id}`}
    >
      <img
        alt={`Author ${id}`}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYm0pHhdBujTSctCh-j3bJP4paCLgTkLbdfuMD_O-JIVEPIW6E"
      />
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold">
          Author {id}
        </span>
        <span className="block text-xs text-base-content/60">View posts</span>
      </span>
    </Link>
  );
};

export default PostAuthor;
