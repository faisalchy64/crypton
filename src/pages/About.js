import about from "../assets/about.png";

function About() {
    return (
        <section className="py-10 md:py-20">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-1000 px-5 mb-10">
                We’ve built a platform to buy and sell shares.
            </h1>
            <div className="w-4/5 flex flex-col md:flex-row items-center gap-5 mx-auto">
                <div className="md:w-1/2">
                    <img src={about} alt="" className="w-full" />
                </div>
                <div className="md:w-1/2 flex flex-col gap-2.5 text-gray-500">
                    <p>
                        Welcome to our cryptocurrency website! We are a team of
                        enthusiasts who are passionate about the potential of
                        blockchain technology and its ability to revolutionize
                        the world of finance. We believe that cryptocurrency has
                        the power to democratize access to financial services
                        and make it easier for people to securely and
                        transparently manage their money.
                    </p>
                    <p>
                        On our website, you will find a wealth of information
                        about the world of cryptocurrency. We cover the latest
                        news and developments in the space, provide in-depth
                        analysis of individual coins and projects, and offer
                        educational resources to help you better understand the
                        technology behind it all.
                    </p>
                    <p>
                        We are committed to providing accurate and unbiased
                        information, so you can make informed decisions about
                        your investments. We also strive to create a welcoming
                        and inclusive community for anyone interested in
                        learning more about cryptocurrency and how it can
                        benefit them.
                    </p>
                    <p>
                        Thank you for choosing to join us on this journey! We
                        look forward to sharing our knowledge and passion with
                        you.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
