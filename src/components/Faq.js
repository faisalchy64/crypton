import Accordion from "./Accordion";

function Faq() {
    return (
        <section className="py-20">
            <div
                className="text-center px-10 mb-20"
                data-aos="fade-up"
                data-aos-duration="3000"
            >
                <p className="font-bold text-blue-1000">Have some questions?</p>
                <h3 className="text-3xl md:text-4xl font-bold text-center text-indigo-1000 my-5">
                    Frequently Asked Questions
                </h3>
                <p className="text-gray-500">
                    Get answers to your questions quickly and easily.
                </p>
            </div>
            <div className="w-4/5 flex flex-col md:flex-row gap-5 mx-auto">
                <div className="w-full md:w-1/2 flex flex-col gap-5">
                    <Accordion
                        title="What is cryptocurrency?"
                        answer="Cryptocurrency is a digital or virtual currency that uses cryptography for security and is decentralized, meaning it is not controlled by a central authority such as a government or financial institution. Cryptocurrencies are based on a distributed ledger technology called blockchain, which allows for secure and transparent transactions. Some popular cryptocurrencies include Bitcoin and Ethereum."
                    />
                    <Accordion
                        title="How does cryptocurrency work?"
                        answer="Cryptocurrencies use blockchain technology to record and verify transactions on a decentralized network. In a cryptocurrency transaction, the sender uses their private key to transfer ownership of a specific amount of cryptocurrency to the recipient's public key. This transaction is broadcast to the network and verified by nodes (i.e. computers on the network) through a process called mining. Once a transaction is verified, it is added to the blockchain, which is a publicly-available, tamper-evident ledger of all transactions on the network. This ensures that the transaction is secure and transparent."
                    />
                    <Accordion
                        title="What is blockchain technology?"
                        answer="Blockchain is a distributed ledger technology that allows for secure and transparent record-keeping. It is a decentralized system that allows for the recording of transactions across a network of computers, without the need for a central authority. Each transaction on a blockchain is verified by the network through a process called mining, and once verified, it is added to a block, which is added to the chain of previous blocks. This creates an immutable and tamper-evident record of all transactions on the network. Blockchain technology is used in many industries, including finance, supply chain management, and the public sector."
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-5">
                    <Accordion
                        title="How do I buy and sell cryptocurrency?"
                        answer="To buy and sell cryptocurrency, you will need to use a cryptocurrency exchange. A cryptocurrency exchange is a platform that allows you to buy, sell, and trade cryptocurrencies. Some popular exchanges include Coinbase and Binance. Before you can buy and sell cryptocurrency on an exchange, you will need to create an account and verify your identity. This typically involves providing personal information and proof of identity, such as a government-issued ID. Once your account is set up and verified, you can link your bank account or credit card to the exchange and start buying and selling cryptocurrency. Some exchanges also allow you to buy cryptocurrency using other payment methods, such as PayPal."
                    />
                    <Accordion
                        title="How do I store my cryptocurrency safely?"
                        answer="To store your cryptocurrency safely, you will need to use a cryptocurrency wallet. A cryptocurrency wallet is a digital wallet that allows you to securely store, send, and receive cryptocurrencies. There are different types of wallets, including hot wallets, which are connected to the internet, and cold wallets, which are offline. It is generally considered safer to use a cold wallet, such as a hardware wallet, to store your cryptocurrency, as it is not connected to the internet and is therefore less vulnerable to hacking. When choosing a cryptocurrency wallet, be sure to research and compare different options to find one that meets your needs and is secure. It is also important to keep your wallet's private keys and recovery phrase in a safe and secure place, as these are needed to access your cryptocurrency."
                    />
                </div>
            </div>
        </section>
    );
}

export default Faq;
