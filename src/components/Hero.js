import { Link } from "react-router-dom";
import span from "../assets/heros/span-shape.svg";
import screen from "../assets/heros/screen.png";
import bitcoin from "../assets/heros/bitcoin.png";
import ethereum from "../assets/heros/ethereum.png";

function Hero() {
    return (
        <section className="bg-indigo-1000 py-20 rounded-b-[50px]">
            <div className="w-4/5 flex justify-center lg:justify-between items-center mx-auto">
                <div className="text-white">
                    <p className="text-xs md:text-base font-semibold">
                        Start Envesting & Earn Money
                    </p>
                    <h1 className="text-3xl md:text-5xl font-bold md:leading-[60px] my-5">
                        Say Goodbye To <br /> Idle{" "}
                        <span
                            style={{ backgroundImage: `url(${span})` }}
                            className="bg-no-repeat bg-bottom"
                        >
                            Money.
                        </span>
                    </h1>
                    <p className="text-[10px] md:text-base mb-[50px]">
                        Invest your spare change in Bitcoin and save with <br />
                        crypto to e arn interest in real time.
                    </p>

                    <Link
                        to="/about"
                        className="bg-blue-1000 hover:bg-white hover:text-indigo-1000 text-xs md:text-sm font-semibold px-10 py-3.5 rounded-full"
                    >
                        Discover More
                    </Link>
                </div>
                <div className="hidden lg:block relative">
                    <img src={screen} alt="" />
                    <img
                        src={ethereum}
                        alt=""
                        className="absolute top-0 left-[39.5%] animate-bounce"
                    />
                    <img
                        src={bitcoin}
                        alt=""
                        className="absolute bottom-20 left-1/2 animate-bounce"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
