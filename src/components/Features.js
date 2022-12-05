import exchange from "../assets/features/exchange.png";
import secure from "../assets/features/secure.png";
import trading from "../assets/features/trading.png";

function Features() {
    return (
        <section className="py-20">
            <div
                className="text-center px-10"
                data-aos="fade-up"
                data-aos-duration="3000"
            >
                <p className="text-blue-1000">Why choose us</p>
                <h3 className="text-4xl font-bold text-center text-indigo-1000 my-5">
                    Our Features
                </h3>
                <p className="text-sm text-gray-500">
                    There are many variations of features available, but the
                    main features are given below.
                </p>
            </div>
            <div
                className="w-4/5 grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto my-10"
                data-aos="fade-up"
                data-aos-duration="3000"
            >
                <div className="h-[400px] flex flex-col items-center gap-y-5 bg-white px-[50px] py-10 hover:scale-110 antialiased hover:border-t-2 hover:border-b-2  hover:border-blue-1000 transition-all duration-500 shadow-card rounded-3xl">
                    <img
                        src={exchange}
                        alt=""
                        className="w-[165px] h-[165px]"
                    />
                    <h4 className="text-lg font-bold text-center text-indigo-1000">
                        Instant Exchage
                    </h4>
                    <p className="text-center text-xs text-gray-500 leading-5">
                        {`A trusted and secure bitcoin and crypto exchange. Get
                        started with the easiest and most secure platform to
                        buy, sell, trade, and earn cryptocurrencies.`.slice(
                            0,
                            101
                        )}
                        ...
                    </p>
                </div>
                <div className="h-[400px] flex flex-col items-center gap-y-5 bg-white px-[50px] py-10 hover:scale-110 hover:border-t-2 hover:border-b-2 hover:border-blue-1000 transition-all duration-500 shadow-card rounded-3xl">
                    <img src={secure} alt="" className="w-[165px] h-[165px]" />
                    <h4 className="text-lg font-bold text-center text-indigo-1000">
                        Safe & Secure
                    </h4>
                    <p className="text-xs text-center text-gray-500 leading-5">
                        {`The technology that powers our platform was developed
                        with industry-leading security and encryption at its
                        core.`.slice(0, 101)}
                        ...
                    </p>
                </div>
                <div className="h-[400px] flex flex-col items-center gap-y-5 bg-white px-[50px] py-10 hover:scale-110 hover:border-t-2 hover:border-b-2 hover:border-blue-1000 transition-all duration-500 shadow-card rounded-3xl">
                    <img src={trading} alt="" className="w-[165px] h-[165px]" />
                    <h4 className="text-lg font-bold text-center text-indigo-1000">
                        Instant Trading
                    </h4>
                    <p className="text-xs text-center text-gray-500 leading-5">
                        {`Bitcoin USD price, real-time (live) charts, news and
                        videos. Learn about BTC value, bitcoin cryptocurrency,
                        crypto trading, and more.`.slice(0, 101)}
                        ...
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Features;
