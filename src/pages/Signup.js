import { Link } from "react-router-dom";

function Signup() {
    return (
        <section className="bg-blue-5000 py-10 md:py-20">
            <div className="md:w-[450px] bg-white p-5 md:p-10 mx-5 md:mx-auto shadow-card rounded-2xl">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-1000 px-5">
                    Signup
                </h1>
                <form className="flex flex-col items-center gap-5 my-10">
                    <div className="w-full flex flex-col md:flex-row justify-between gap-5">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full h-[50px] bg-blue-5000 text-gray-500 px-5 border-none outline-none rounded-[30px]"
                        />
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full h-[50px] bg-blue-5000 text-gray-500 px-5 border-none outline-none rounded-[30px]"
                        />
                    </div>
                    <input
                        type="password"
                        placeholder="Your password"
                        className="w-full h-[50px] bg-blue-5000 text-gray-500 px-5 border-none outline-none rounded-[30px]"
                    />
                    <input
                        type="password"
                        placeholder="Confirm password"
                        className="w-full h-[50px] bg-blue-5000 text-gray-500 px-5 border-none outline-none rounded-[30px]"
                    />
                    <input
                        type="submit"
                        value="Create Account"
                        className="w-full h-[50px] bg-blue-1000 hover:bg-indigo-1000 text-white px-5 border-none outline-none rounded-[30px]"
                    />
                </form>
                <div className="text-center">
                    <Link to="/login" className="text-sm text-blue-1000">
                        Already have an account?
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Signup;
