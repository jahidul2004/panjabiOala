import heroImg from "../assets/Combo-1.jpg";
const AnotherCombo = () => {
    return (
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-[#0b0f32] order-2 md:order-1 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-left mb-5">
                    আরেকটি শার্ট কম্বো
                </h1>
                <p>যে-কোন একটি আপনার পছন্দ হবেই</p>
                <button className="mt-8 hover:text-[#027afb] btn text-xl font-bold border-none bg-[#027afb] text-white">
                    এখনই অর্ডার করুন
                </button>
            </div>
            <div className="order-1 md:order-2">
                <div>
                    <img className="rounded-lg" src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AnotherCombo;
