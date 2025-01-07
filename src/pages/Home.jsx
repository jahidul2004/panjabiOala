import AnotherCombo from "../components/AnotherCombo";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SizeChart from "../components/SizeChart";
import Stat from "../components/Stat";

const Home = () => {
    return (
        <div>
            <div className="bg-[#0b0f32]">
                {/* Hero */}
                <div className="container mx-auto p-5 md:p-10">
                    {/* Header */}
                    <Header></Header>
                    {/* Header end */}

                    {/* Hero */}
                    <Hero></Hero>
                    {/* Hero end */}
                </div>
                {/* Hero end */}
            </div>
            <div className="bg-white">
                <div className="container mx-auto p-5 md:p-10">
                    {/* SizeChart */}
                    <SizeChart></SizeChart>
                    {/* SizeChart end */}
                </div>
            </div>
            <div className="bg-[#0b0f32]">
                <div className="container mx-auto p-5 md:p-10">
                    {/* Stat */}
                    <Stat></Stat>
                    {/* Stat end */}
                </div>
            </div>
            <div className="bg-white">
                <div className="container mx-auto p-5 md:p-10">
                    {/* Another */}
                    <AnotherCombo></AnotherCombo>
                    {/* Another end */}
                </div>
            </div>
        </div>
    );
};

export default Home;
