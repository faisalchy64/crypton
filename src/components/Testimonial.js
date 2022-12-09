import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import silva from "../assets/customers/silva.png";
import warner from "../assets/customers/warner.png";
import gilario from "../assets/customers/gilario.png";

function Testimonial() {
    return (
        <section className="bg-blue-5000 py-20">
            <div
                className="text-center px-10 mb-20"
                data-aos="fade-up"
                data-aos-duration="3000"
            >
                <p className="font-bold text-blue-1000">Customer Reviews</p>
                <h3 className="text-3xl md:text-4xl font-bold text-center text-indigo-1000 my-5">
                    Our Testimonials
                </h3>
                <p className="text-gray-500">
                    Welcome to our customer reviews section!
                </p>
            </div>

            <Swiper
                modules={[Pagination]}
                slidesPerView={2}
                spaceBetween={50}
                pagination={{ clickable: true, type: "bullets" }}
                className="hidden md:block"
            >
                <SwiperSlide className="bg-white px-10 relative py-[50px] rounded-lg overflow-hidden">
                    <div className="w-[100px] h-[100px] bg-blue-1000 absolute -top-[50px] -right-[50px] rounded-[50%] hover:shadow-customer"></div>
                    <p className="text-gray-500 leading-[30px]">
                        “Crypton is a great platform for buying and selling
                        cryptocurrencies. The interface is user-friendly and the
                        fees are competitive.”
                    </p>
                    <div className="flex items-center gap-5 mt-10">
                        <img src={silva} alt="" className="w-[50px] h-[50px]" />
                        <div>
                            <h5 className="font-bold text-indigo-1000">
                                Somalia D Silva
                            </h5>
                            <p className="text-sm text-gray-500">
                                Business Manager
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white px-10 relative py-[50px] rounded-lg overflow-hidden">
                    <div className="w-[100px] h-[100px] bg-blue-1000 absolute -top-[50px] -right-[50px] rounded-[50%] hover:shadow-customer"></div>
                    <p className="text-gray-500 leading-[30px]">
                        “It is a reliable and trustworthy platform for managing
                        your crypto assets. The customer support is responsive
                        and helpful.”
                    </p>
                    <div className="flex items-center gap-5 mt-10">
                        <img
                            src={warner}
                            alt=""
                            className="w-[50px] h-[50px]"
                        />
                        <div>
                            <h5 className="font-bold text-indigo-1000">
                                David Warner
                            </h5>
                            <p className="text-sm text-gray-500">
                                Blockchain Developer
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white px-10 relative py-[50px] rounded-lg overflow-hidden">
                    <div className="w-[100px] h-[100px] bg-blue-1000 absolute -top-[50px] -right-[50px] rounded-[50%] hover:shadow-customer"></div>
                    <p className="text-gray-500 leading-[30px]">
                        “It is a top choice for active traders. The exchange
                        offers a wide range of coins and features, including low
                        fees and fast transactions.”
                    </p>
                    <div className="flex items-center gap-5 mt-10">
                        <img
                            src={gilario}
                            alt=""
                            className="w-[50px] h-[50px]"
                        />
                        <div>
                            <h5 className="font-bold text-indigo-1000">
                                Jems Gilario
                            </h5>
                            <p className="text-sm text-gray-500">
                                Graphics Designer
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* responsive */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                
                pagination={{ clickable: true, type: "bullets" }}
                className="block md:hidden"
            >
                <SwiperSlide className="bg-white px-10 relative py-[50px] rounded-lg overflow-hidden">
                    <div className="w-[100px] h-[100px] bg-blue-1000 absolute -top-[50px] -right-[50px] rounded-[50%] hover:shadow-customer"></div>
                    <p className="text-gray-500 leading-[30px]">
                        “Crypton is a great platform for buying and selling
                        cryptocurrencies. The interface is user-friendly and the
                        fees are competitive.”
                    </p>
                    <div className="flex items-center gap-5 mt-10">
                        <img src={silva} alt="" className="w-[50px] h-[50px]" />
                        <div>
                            <h5 className="font-bold text-indigo-1000">
                                Somalia D Silva
                            </h5>
                            <p className="text-sm text-gray-500">
                                Business Manager
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white px-10 relative py-[50px] rounded-lg overflow-hidden">
                    <div className="w-[100px] h-[100px] bg-blue-1000 absolute -top-[50px] -right-[50px] rounded-[50%] hover:shadow-customer"></div>
                    <p className="text-gray-500 leading-[30px]">
                        “It is a reliable and trustworthy platform for managing
                        your crypto assets. The customer support is responsive
                        and helpful.”
                    </p>
                    <div className="flex items-center gap-5 mt-10">
                        <img
                            src={warner}
                            alt=""
                            className="w-[50px] h-[50px]"
                        />
                        <div>
                            <h5 className="font-bold text-indigo-1000">
                                David Warner
                            </h5>
                            <p className="text-sm text-gray-500">
                                Blockchain Developer
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white px-10 relative py-[50px] rounded-lg overflow-hidden">
                    <div className="w-[100px] h-[100px] bg-blue-1000 absolute -top-[50px] -right-[50px] rounded-[50%] hover:shadow-customer"></div>
                    <p className="text-gray-500 leading-[30px]">
                        “It is a top choice for active traders. The exchange
                        offers a wide range of coins and features, including low
                        fees and fast transactions.”
                    </p>
                    <div className="flex items-center gap-5 mt-10">
                        <img
                            src={gilario}
                            alt=""
                            className="w-[50px] h-[50px]"
                        />
                        <div>
                            <h5 className="font-bold text-indigo-1000">
                                Jems Gilario
                            </h5>
                            <p className="text-sm text-gray-500">
                                Graphics Designer
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Testimonial;
