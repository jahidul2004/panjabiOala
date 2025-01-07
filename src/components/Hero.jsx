import Countdown from "react-countdown";
import heroImg from "../assets/Combo-1.jpg";
import { IoMdCheckbox } from "react-icons/io";

const Hero = () => {
    const targetTime =
        new Date().getTime() +
        5 * 24 * 60 * 60 * 1000 +
        12 * 60 * 60 * 1000 +
        45 * 60 * 1000 +
        32 * 1000;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <p className="text-2xl font-bold text-red-500">অফার শেষ!</p>;
        } else {
            return (
                <div className="mt-5 text-xl font-bold text-white grid grid-cols-2 md:grid-cols-4 gap-5">
                    <p className="border p-2">{days} Days</p>
                    <p className="border p-2">{hours} Hours</p>
                    <p className="border p-2">{minutes} Minutes</p>
                    <p className="border p-2">{seconds} Second</p>
                </div>
            );
        }
    };

    return (
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-white order-2 md:order-1">
                <h1 className="text-3xl font-bold text-left text-white mb-5">
                    স্টক শেষ হওয়ার আগেই অর্ডার করুন
                </h1>
                <ul className="text-xl font-bold mb-5">
                    <li className="flex items-center gap-2">
                        <IoMdCheckbox />
                        ১০০% কটন ফেব্রিক
                    </li>
                    <li className="flex items-center gap-2">
                        <IoMdCheckbox />
                        ধোয়ার পর রং উঠার কোন ভয় নেই
                    </li>
                    <li className="flex items-center gap-2">
                        <IoMdCheckbox />
                        ১০০% কালার গ্যারান্টি
                    </li>
                    <li className="flex items-center gap-2">
                        <IoMdCheckbox />
                        বুকে রয়েছে পকেট
                    </li>
                    <li className="flex items-center gap-2">
                        <IoMdCheckbox />
                        সারা দেশে ক্যাশ অন ডেলিভারি
                    </li>
                </ul>
                <h2 className="text-2xl font-bold text-error">
                    অফার শেষ হতে বাকী মাত্র
                </h2>
                <div>
                    {/* Countdown Component */}
                    <Countdown date={targetTime} renderer={renderer} />
                </div>
                <div className="mt-5">
                    <button className="hover:text-[#027afb] btn text-xl font-bold border-none bg-[#027afb] text-white">
                        অর্ডার করুন
                    </button>
                </div>
                <h2 className="mt-5 text-2xl font-bold text-white">
                    অফারটি পাবেন প্রথম ১০০ জন
                </h2>
            </div>
            <div className="order-1 md:order-2">
                <div>
                    <img className="rounded-lg" src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
