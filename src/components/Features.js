import exchange from "../assets/features/exchange.png";
import secure from "../assets/features/secure.png";
import trading from "../assets/features/trading.png";

function Features() {
    return (
        <section className="py-20" data-aos="fade-up" data-aos-duration="3000">
            <div className="text-center px-10">
                <p className="font-bold text-blue-1000">Why choose us?</p>
                <h3 className="text-3xl md:text-4xl font-bold text-center text-indigo-1000 my-5">
                    Our Features
                </h3>
                <p className="text-gray-500">
                    There are many variations of features available, but the
                    main features are given below.
                </p>
            </div>
            <div
                className="w-4/5 grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto my-10"
                data-aos="fade-up"
                data-aos-duration="3000"
            >
                <div className="md:h-[500px] flex flex-col items-center gap-y-5 bg-white px-[50px] py-10 hover:scale-110 hover:border-t-2 hover:border-b-2  hover:border-blue-1000 transition-all duration-500 shadow-card rounded-3xl">
                    <img
                        src={exchange}
                        alt=""
                        className="w-[165px] h-[165px]"
                    />
                    <h4 className="text-lg font-bold text-center text-indigo-1000">
                        Instant Exchage
                    </h4>
                    <p className="text-center text-sm text-gray-500 leading-[30px]">
                        Crypton instant exchange is a service that allows users
                        to buy and sell cryptocurrencies quickly and easily.
                    </p>
                </div>
                <div className="md:h-[500px] flex flex-col items-center gap-y-5 bg-white px-[50px] py-10 hover:scale-110 hover:border-t-2 hover:border-b-2 hover:border-blue-1000 transition-all duration-500 shadow-card rounded-3xl">
                    <img src={secure} alt="" className="w-[165px] h-[165px]" />
                    <h4 className="text-lg font-bold text-center text-indigo-1000">
                        Safe & Secure
                    </h4>
                    <p className="text-center text-sm text-gray-500 leading-[30px]">
                        The technology behind cryptocurrencies, known as
                        blockchain, is designed to be secure and to protect the
                        integrity of transactions.
                    </p>
                </div>
                <div className="md:h-[500px] flex flex-col items-center gap-y-5 bg-white px-[50px] py-10 hover:scale-110 hover:border-t-2 hover:border-b-2 hover:border-blue-1000 transition-all duration-500 shadow-card rounded-3xl">
                    <img src={trading} alt="" className="w-[165px] h-[165px]" />
                    <h4 className="text-lg font-bold text-center text-indigo-1000">
                        Instant Trading
                    </h4>
                    <p className="text-center text-sm text-gray-500 leading-[30px]">
                        Crypto instant trading makes it easy to buy and sell
                        cryptocurrencies quickly and securely, with no waiting
                        and no hassles.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Features;
