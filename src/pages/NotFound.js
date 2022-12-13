import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center gap-5">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-1000">
                Page Not Found!
            </h1>
            <Link
                to="/"
                className="bg-blue-1000 text-white px-5 py-2.5 rounded"
            >
                Back To Home Page
            </Link>
        </section>
    );
}

export default NotFound;
