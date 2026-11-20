import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <NavLink
          to={"/posts/categories/agriculture"}
          className={({ isActive }) =>
            `link link-hover ${isActive ? "text-primary" : "link"}`
          }
        >
          Agriculture
        </NavLink>
        <NavLink
          to={"/posts/categories/business"}
          className={({ isActive }) =>
            `link link-hover ${isActive ? "text-primary" : "link"}`
          }
        >
          Business
        </NavLink>
        <NavLink
          to={"/posts/categories/education"}
          className={({ isActive }) =>
            `link link-hover ${isActive ? "text-primary" : "link"}`
          }
        >
          Education
        </NavLink>
        <NavLink
          to={"/posts/categories/entertainment"}
          className={({ isActive }) =>
            `link link-hover ${isActive ? "text-primary" : "link"}`
          }
        >
          Entertainment
        </NavLink>
        <NavLink
          to={"/posts/categories/art"}
          className={({ isActive }) =>
            `link link-hover ${isActive ? "text-primary" : "link"}`
          }
        >
          Art
        </NavLink>
        <NavLink
          to={"/posts/categories/investment"}
          className={({ isActive }) =>
            `link link-hover ${isActive ? "text-primary" : "link"}`
          }
        >
          Investment
        </NavLink>
        <NavLink
          to={"/posts/categories/uncategorized"}
          className={({ isActive }) =>
            `link link-hover ${isActive ? "text-primary" : "link"}`
          }
        >
          Uncategorized
        </NavLink>
        <NavLink
          to={"/posts/categories/weather"}
          className={({ isActive }) =>
            `link link-hover ${isActive ? "text-primary" : "link"}`
          }
        >
          Weather
        </NavLink>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by xyz
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
