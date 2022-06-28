
import Navbar from "../../Navbar";
import Header from "../../Header";
import Featured from "../../Featured";
import PropertyList from "../../PropertyList";
import FeaturedProperties from "../../FeaturedProperties";
import MailList from "../../MailList";
import Footer from "../../Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />

            <div className="home__container d-flex column align-items-center">
                <Featured />
                <h1 className="home__title">Browse by property type</h1>
                <PropertyList />
                <h1 className="home__title">Home guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    );
}

export default Home;