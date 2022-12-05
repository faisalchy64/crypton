function Step() {
    return (
        <section className="bg-blue-5000 py-20">
            <div
                className="text-center px-10"
                data-aos="fade-up"
                data-aos-duration="3000"
            >
                <p className="font-bold text-blue-1000">
                    Ready To Get Started?
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-center text-indigo-1000 my-5">
                    3 Steps To Start
                </h3>
                <p className="text-gray-500">
                    You need to follow 3 steps to start your journey with
                    cryptocurrency.
                </p>
            </div>

            <div
                className="w-4/5 grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto my-10"
                data-aos="fade-up"
                data-aos-duration="3000"
            >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                    <h4 className="w-[70px] h-[70px] flex justify-center items-center shrink-0 text-lg font-bold bg-white text-indigo-1000 hover:bg-blue-1000 hover:text-white rounded-[50%] shadow-card">
                        1
                    </h4>
                    <div>
                        <h4 className="text-lg font-bold text-center text-indigo-1000 mb-5">
                            Create Your Wallet
                        </h4>
                        <p className="text-sm text-center text-gray-500 leading-[30px]">
                            {`The first step is to get a wallet to store your
                            Bitcoin. A Bitcoin wallet is a secure digital wallet
                            used to store, send and receive Bitcoin.`.slice(
                                0,
                                151
                            )}
                            ...
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                    <h4 className="w-[70px] h-[70px] flex justify-center items-center shrink-0 text-lg font-bold bg-white text-indigo-1000 hover:bg-blue-1000 hover:text-white rounded-[50%] shadow-card">
                        2
                    </h4>
                    <div>
                        <h4 className="text-lg font-bold text-center text-indigo-1000 mb-5">
                            Make Payment
                        </h4>
                        <p className="text-sm text-center text-gray-500 leading-[30px]">
                            {`Once you have a Bitcoin wallet, you can use a
                            traditional payment method such as a credit card,
                            bank transfer (ACH), or debit card to buy Bitcoins
                            on a Bitcoin exchange.`.slice(0, 151)}
                            ...
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                    <h4 className="w-[70px] h-[70px] flex justify-center items-center shrink-0 text-lg font-bold bg-white text-indigo-1000 hover:bg-blue-1000 hover:text-white rounded-[50%] shadow-card">
                        3
                    </h4>
                    <div>
                        <h4 className="text-lg font-bold text-center text-indigo-1000 mb-5">
                            Make Payment
                        </h4>
                        <p className="text-sm text-center text-gray-500 leading-[30px]">
                            {`You can buy and sell cryptocurrencies on exchanges
                            or through peer-to-peer trading platforms. When
                            buying or selling cryptocurrencies, it is important
                            to do your research and understand the risks
                            involved. You should also ensure that you are using
                            a secure platform, as there are some scams that
                            could lead to you losing your money.`.slice(0, 151)}
                            ...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Step;
