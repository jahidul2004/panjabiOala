import { TbCoinTaka, TbCurrencyTaka } from "react-icons/tb";
import img from "../assets/Combo-1.jpg";
import { FaLock } from "react-icons/fa";

const OrderForm = () => {
    return (
        <div className="border-2 border-[#027afb] p-5 rounded-lg">
            <h1 className="bg-[#027afb] rounded-lg p-5 text-center text-xl md:text-3xl text-white font-extrabold">
                অর্ডার করতে নীচের ফরমটি পূরণ করুন
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <form
                    action=""
                    className="w-full flex flex-col gap-5 mx-auto mt-5 p-5"
                >
                    <h1 className="text-2xl font-semibold">
                        Billing & Shipping Details
                    </h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">পূর্ণ নাম লিখুন</span>
                        </label>
                        <input
                            type="text"
                            placeholder="পূর্ণ নাম"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                মোবাইল নাম্বার লিখুন
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="মোবাইল নাম্বার"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                জেলা সিলেক্ট করুন
                            </span>
                        </label>
                        <select
                            className="select select-bordered w-full"
                            name=""
                            id=""
                        >
                            <option value="dhaka">ঢাকা</option>
                            <option value="chattogram">চট্টগ্রাম</option>
                            <option value="sylhet">সিলেট</option>
                            <option value="khulna">খুলনা</option>
                            <option value="rajshahi">রাজশাহী</option>
                            <option value="barishal">বরিশাল</option>
                            <option value="rangpur">রংপুর</option>
                            <option value="mymensingh">ময়মনসিংহ</option>
                            <option value="comilla">কুমিল্লা</option>
                            <option value="faridpur">ফরিদপুর</option>
                            <option value="gazipur">গাজীপুর</option>
                            <option value="narayanganj">নারায়ণগঞ্জ</option>
                            <option value="tangail">টাঙ্গাইল</option>
                            <option value="bogra">বগুড়া</option>
                            <option value="dinajpur">দিনাজপুর</option>
                            <option value="jamalpur">জামালপুর</option>
                            <option value="kishoreganj">কিশোরগঞ্জ</option>
                            <option value="madaripur">মাদারীপুর</option>
                            <option value="manikganj">মানিকগঞ্জ</option>
                            <option value="munshiganj">মুন্সিগঞ্জ</option>
                            <option value="narayanganj">নারায়ণগঞ্জ</option>
                            <option value="narsingdi">নরসিংদী</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">থানার নাম লিখুন</span>
                        </label>
                        <input
                            type="text"
                            placeholder="থানা"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                বিস্তারিত ঠিকানা লিখুন
                            </span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered"
                            placeholder="ঠিকানা"
                        ></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                সাইজ সিলেক্ট করুন
                            </span>
                        </label>
                        <select
                            className="select select-bordered w-full"
                            name=""
                            id=""
                        >
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </div>

                    <div>
                        <h1 className="text-2xl font-semibold">Shipping</h1>
                        <div className="flex border p-2 mt-5 rounded-lg justify-between">
                            <h1>ডেলিভারি চার্জ:</h1>
                            <h1 className="flex items-center">
                                <TbCurrencyTaka />
                                60 টাকা
                            </h1>
                        </div>
                    </div>
                </form>

                <div className="p-5 mt-5">
                    <h1 className="text-2xl font-semibold">Your Order</h1>
                    <div className="mt-5">
                        <div className="flex justify-between border-b border-dashed p-2">
                            <p>Product</p>
                            <p>Subtotal</p>
                        </div>
                        <div className="flex items-center justify-between border-b border-dashed p-2">
                            <div className="flex items-center gap-4">
                                <img
                                    className="w-[60px] h-[60px] rounded-lg"
                                    src={img}
                                    alt=""
                                />
                                <p>3pcs T-Shirt Combo</p>
                            </div>
                            <p>x1 Tk 1470.00</p>
                        </div>
                        <div className="border-b-2 border-dashed p-2">
                            <div className="my-1 flex justify-between p-2">
                                <p>Subtotal</p>
                                <p>1470 Tk</p>
                            </div>
                            <div className="my-1 flex justify-between p-2">
                                <p>Shipping</p>
                                <p>60 Tk</p>
                            </div>
                        </div>
                        <div className="flex justify-between p-2 mx-2">
                            <p>Total</p>
                            <p>1530 Tk</p>
                        </div>

                        <div className="w-full flex flex-col justify-center items-center mt-5 bg-[#f7f7f7] p-10 rounded-lg text-center">
                            <h1 className="text-xl font-semibold">
                                Cash On Delivery
                            </h1>
                            <p>Pay with cash upon delivery.</p>
                        </div>

                        <div className="mt-5">
                            <button className="w-full btn bg-[#027afb] text-white text-lg font-extrabold">
                                <FaLock className="hidden md:block" />
                                অর্ডার কনফার্ম করুন 1530 টাকা
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;
