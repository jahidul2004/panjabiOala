import sizeChart from "../assets/sizeChart.webp";
const SizeChart = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <div className="text-center bg-[#f7f7f7] h-full flex flex-col justify-center items-center p-10">
                <h1 className="text-xl md:text-2xl font-bold text-black mb-6">
                    রেগুলার মূল্যঃ <del>২৪৭০</del> টাকা
                </h1>
                <h1 className="text-xl md:text-2xl font-bold text-black mb-6">
                    অফার মূল্যঃ ১৪৭০ টাকা
                </h1>
                <h1 className="text-2xl font-extrabold text-[#0b0f32] mb-8">
                    স্টক শেষ হওয়ার আগেই অর্ডার করুন
                </h1>
                <button className="hover:text-[#027afb] btn text-xl font-bold border-none bg-[#027afb] text-white">
                    অর্ডার করুন
                </button>
            </div>
            <div>
                <div>
                    <img src={sizeChart} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SizeChart;
