import dublin from "../../asset/dublin.webp";
import austin from "../../asset/austin.webp";
import reno from "../../asset/reno.webp";

const Featured = () => {

    return (
        <div className="featured d-flex justify-content-between">
            <div className="featured__item">
                <img
                    src={dublin}
                    className="featuredImg"
                    alt=""
                />
                <div className="featured__titles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featured__item">
                <img
                    src={austin}
                    className="featuredImg"
                    alt=""
                />
                <div className="featured__titles">
                    <h1>Austin</h1>
                    <h2>532 properties</h2>
                </div>
            </div>
            <div className="featured__item">
                <img
                    src={reno}
                    className="featuredImg"
                    alt=""
                />
                <div className="featured__titles">
                    <h1>Reno</h1>
                    <h2>533 properties</h2>
                </div>
            </div>
        </div>
    );
}

export default Featured;