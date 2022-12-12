import one from "../assets/blogs/one.png";
import two from "../assets/blogs/two.png";
import three from "../assets/blogs/three.png";

function Blog() {
    return (
        <section className="py-10 md:py-20">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-1000 px-5 mb-10">
                Read some topics here
            </h1>
            <div className="w-4/5 grid md:grid-cols-2 gap-5 mx-auto">
                {/* one */}
                <div className="group shadow-card rounded-xl overflow-hidden">
                    <div className="overflow-hidden">
                        <img
                            src={one}
                            alt=""
                            className="w-full group-hover:scale-110 transition-all duration-500"
                        />
                    </div>
                    <div className="p-[35px]">
                        <div className="flex gap-5">
                            <div className="flex items-center gap-1.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    width="15"
                                    height="15"
                                    className="fill-[#3E80FF]"
                                >
                                    <path d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
                                </svg>
                                <span className="text-sm text-gray-500">
                                    10 Nov 2022
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    width="15"
                                    height="15"
                                    className="fill-[#3E80FF]"
                                >
                                    <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
                                </svg>
                                <span className="text-sm text-gray-500">
                                    Anjelio Joly
                                </span>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-indigo-1000 hover:text-blue-1000 cursor-pointer my-5">
                            What is Cryptocurrency?
                        </h3>
                        <p className="text-gray-500">
                            Cryptocurrency is a digital or virtual currency that
                            uses cryptography for security and is decentralized,
                            meaning it is not controlled by any single
                            institution or government.
                        </p>
                        <button className="text-indigo-1000 hover:text-blue-1000 underline mt-5">
                            Read More
                        </button>
                    </div>
                </div>
                {/* two */}
                <div className="group shadow-card rounded-xl overflow-hidden">
                    <div className="overflow-hidden">
                        <img
                            src={two}
                            alt=""
                            className="w-full group-hover:scale-110 transition-all duration-500"
                        />
                    </div>
                    <div className="p-[35px]">
                        <div className="flex gap-5">
                            <div className="flex items-center gap-1.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    width="15"
                                    height="15"
                                    className="fill-[#3E80FF]"
                                >
                                    <path d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
                                </svg>
                                <span className="text-sm text-gray-500">
                                    10 Dec 2022
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    width="15"
                                    height="15"
                                    className="fill-[#3E80FF]"
                                >
                                    <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
                                </svg>
                                <span className="text-sm text-gray-500">
                                    Shams Karim
                                </span>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-indigo-1000 hover:text-blue-1000 cursor-pointer my-5">
                            What is Blockchain Technology?
                        </h3>
                        <p className="text-gray-500">
                            Blockchain technology is a decentralized and
                            distributed digital ledger that is used to record
                            transactions across many computers so that the
                            record cannot be altered retroactively without the
                            alteration of all subsequent blocks and the
                            consensus of the network.
                        </p>
                        <button className="text-indigo-1000 hover:text-blue-1000 underline mt-5">
                            Read More
                        </button>
                    </div>
                </div>
                {/* three */}
                <div className="group shadow-card rounded-xl overflow-hidden">
                    <div className="overflow-hidden">
                        <img
                            src={three}
                            alt=""
                            className="w-full group-hover:scale-110 transition-all duration-500"
                        />
                    </div>
                    <div className="p-[35px]">
                        <div className="flex gap-5">
                            <div className="flex items-center gap-1.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    width="15"
                                    height="15"
                                    className="fill-[#3E80FF]"
                                >
                                    <path d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
                                </svg>
                                <span className="text-sm text-gray-500">
                                    15 Dec 2022
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    width="15"
                                    height="15"
                                    className="fill-[#3E80FF]"
                                >
                                    <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
                                </svg>
                                <span className="text-sm text-gray-500">
                                    Faisal Karim
                                </span>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-indigo-1000 hover:text-blue-1000 cursor-pointer my-5">
                            What is NFT?
                        </h3>
                        <p className="text-gray-500">
                            NFT is an acronym that stands for "non-fungible
                            token". It is a type of digital asset that is unique
                            and cannot be replaced or exchanged for another
                            asset of the same value.
                        </p>
                        <button className="text-indigo-1000 hover:text-blue-1000 underline mt-5">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
