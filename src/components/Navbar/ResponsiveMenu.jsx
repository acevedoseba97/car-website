import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLinks } from "./NavLinks";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-full"
      } fixed top-0 z-50 bg-white dark:bg-gray-900 h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex flex-col justify-between px-8 pb-6 pt-16 transition-all duration-300`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hola Usuario</h1>
            <h2>Premium User</h2>
          </div>
        </div>

        {/* Links */}
        <nav className="mt-8">
          <ul className="space-y-4 text-xl">
            {NavLinks.map((data) => (
              <li key={data.id}>
                <a href={data.link}>{data.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div>
        <h2>
          Visita mi
          <a
            className="text-cyan-500 hover:text-cyan-800 transition-colors duration-300"
            href="https://acevedoseba97.github.io/portfolio-web/"
          >
            {" "}
            Portfolio ✨
          </a>
        </h2>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
