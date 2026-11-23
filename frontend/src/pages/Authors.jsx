import { Link } from "react-router";
import DUMMY_USERS from "./authorData.js";

const Authors = () => {
  return (
    <section className="mx-auto my-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold">Authors</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {DUMMY_USERS.map((author) => (
          <Link
            key={author.id}
            className="flex items-center gap-4 rounded-xl border border-base-300 bg-base-100 p-4 transition-shadow hover:shadow-md"
            to={`/posts/user/${author.id}`}
          >
            <img
              src={author.avatar}
              alt={author.name}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold">{author.name}</h2>
              <p className="text-sm text-base-content/60">
                {author.post} {author.post === "1" ? "post" : "posts"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Authors;