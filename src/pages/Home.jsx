import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <div className="bg-[#0b0f32]">
            {/* Hero */}
            <div className="container mx-auto p-10">
                {/* Header */}
                <Header></Header>
                {/* Header end */}

                {/* Hero */}
                <Hero></Hero>
                {/* Hero end */}
            </div>
            {/* Hero end */}
        </div>
    );
};

export default Home;