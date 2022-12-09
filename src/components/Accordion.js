import { useState } from "react";

function Accordion({ title, answer }) {
    const [show, setShow] = useState(false);

    return (
        <div className="shadow rounded">
            <h1
                className={`flex justify-between items-center gap-5 px-10 py-[15px] ${
                    show
                        ? "bg-blue-1000 text-white"
                        : "bg-blue-5000 text-gray-800"
                }`}
                onClick={() => setShow(!show)}
            >
                <span>{title}</span>
                {show ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="15"
                        height="15"
                        className="fill-white"
                    >
                        <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="15"
                        height="15"
                        className="fill-gray-500"
                    >
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                    </svg>
                )}
            </h1>
            <div
                className={`text-[15px] text-gray-500 px-[25px] transition-all duration-500 text-justify ${
                    show ? "py-[25px]" : "h-0 overflow-hidden"
                }`}
            >
                {answer}
            </div>
        </div>
    );
}

export default Accordion;
