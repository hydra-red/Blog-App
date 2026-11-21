import { NavLink } from "react-router";

const categories = [
  "Agriculture",
  "Business",
  "Education",
  "Entertainment",
  "Art",
  "Investment",
  "Uncategorized",
  "Weather",
];

const Footer = () => {
  return (
    <footer className="w-full bg-base-200 text-base-content">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 sm:px-6">
        <nav
          className="flex w-full flex-wrap justify-center gap-x-5 gap-y-3"
        >
          {categories.map((category) => (
            <NavLink
              className={({ isActive }) =>
                `link link-hover ${
                  isActive ? "text-primary" : "text-base-content"
                }`
              }
              key={category}
              to={`/posts/categories/${category.toLowerCase()}`}
            >
              {category}
            </NavLink>
          ))}
        </nav>
        <p className="text-center text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved by xyz
        </p>
      </div>
    </footer>
  );
};

export default Footer;
