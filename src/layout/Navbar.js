import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blue from "../assets/logos/blue-logo.png";
import white from "../assets/logos/white-logo.png";

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [selected, setSelected] = useState("/");
    const [position, setPosition] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setPosition(window.scrollY);
        });
    }, []);

    return (
        <nav
            className={`sticky top-0 py-5 ${
                position >= 250
                    ? "bg-white text-indigo-1000 shadow-bottom"
                    : "bg-indigo-1000"
            }`}
        >
            <div className="w-[95%] sm:w-4/5 flex justify-between items-center mx-auto">
                <Link to="/" className="flex items-center gap-x-1.5">
                    <img
                        src={position >= 250 ? blue : white}
                        alt=""
                        className="w-10"
                    />
                    <h3
                        className={`text-2xl font-semibold ${
                            position >= 250 ? "text-indigo-1000" : "text-white"
                        }`}
                    >
                        Crypton
                    </h3>
                </Link>

                <ul
                    className={`hidden md:flex gap-x-5 text-sm font-semibold ${
                        position >= 250 ? "text-indigo-1000" : "text-white"
                    }`}
                >
                    <li
                        className={selected === "/" ? "text-blue-1000" : ""}
                        onClick={() => setSelected("/")}
                    >
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        className={selected === "/blog" ? "text-blue-1000" : ""}
                        onClick={() => setSelected("/blog")}
                    >
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li
                        className={
                            selected === "/contact" ? "text-blue-1000" : ""
                        }
                        onClick={() => setSelected("/contact")}
                    >
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li
                        className={
                            selected === "/about" ? "text-blue-1000" : ""
                        }
                        onClick={() => setSelected("/about")}
                    >
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                {/* icon */}
                <div
                    className="block md:hidden w-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => setToggle(!toggle)}
                >
                    <span
                        className={`block absolute h-[2.5px] w-[30px] bg-white transform transition duration-500 ease-in-out ${
                            toggle ? "rotate-45" : "-translate-y-1.5"
                        }`}
                    ></span>
                    <span
                        className={`block absolute h-[2.5px] w-[30px] bg-white transform transition duration-500 ease-in-out ${
                            toggle ? "opacity-0" : ""
                        }`}
                    ></span>
                    <span
                        className={`block absolute h-[2.5px] w-[30px] bg-white transform transition duration-500 ease-in-out ${
                            toggle ? "-rotate-45" : "translate-y-1.5"
                        }`}
                    ></span>
                </div>

                {/* responsive */}
                <ul
                    className={`w-1/2 transition-all flex md:hidden flex-col gap-y-2.5 bg-white text-indigo-1000 absolute top-full left-0 right-0 mx-auto px-5 rounded-md shadow-menu ${
                        toggle ? "py-3.5" : "h-0 overflow-hidden"
                    }`}
                    onClick={() => setToggle(!toggle)}
                >
                    <li
                        className={selected === "/" ? "text-blue-1000" : ""}
                        onClick={() => setSelected("/")}
                    >
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        className={selected === "/blog" ? "text-blue-1000" : ""}
                        onClick={() => setSelected("/blog")}
                    >
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li
                        className={
                            selected === "/contact" ? "text-blue-1000" : ""
                        }
                        onClick={() => setSelected("/contact")}
                    >
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li
                        className={
                            selected === "/about" ? "text-blue-1000" : ""
                        }
                        onClick={() => setSelected("/about")}
                    >
                        <Link to="/about">About</Link>
                    </li>
                    <li
                        className={
                            selected === "/login" ? "text-blue-1000" : ""
                        }
                        onClick={() => setSelected("/login")}
                    >
                        <Link to="/login">Login</Link>
                    </li>
                </ul>

                <Link
                    to="/login"
                    className={`hidden md:block px-10 py-3.5 rounded-full ${
                        position >= 250
                            ? "bg-blue-1000 text-white hover:bg-indigo-1000 hover:text-white"
                            : "bg-white hover:bg-blue-1000 hover:text-white"
                    }`}
                >
                    Get Started
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
