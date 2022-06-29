import useFetch from "../../hooks/useFetch";
import hotel from "../../asset/hotel.webp";
import apartment from "../../asset/apartment.jpg";
import resort from "../../asset/resort.jpg";
import villa from "../../asset/villa.jpg";
import cabin from "../../asset/cabin.jpg";

const PropertyList = () => {
    const { data, loading, error } = useFetch("/hotels/countByType");


    const images = [hotel, apartment, resort, villa, cabin]
    return (
        <div className="property__list d-flex justify-content-between">
            {loading ? "Loading" :
                <>
                    {data && images.map((img, i) => (
                        <div className="property__list__item" key={data.hotels[i].id}>
                            <img
                                src={img}
                                alt=""
                                className="property__listImg"
                            />
                            <div className="property__list__titles">
                                <h1>{data.hotels[i]?.type}</h1>
                                <h2>{data.hotels[i]?.count} {data.hotels[i]?.type}</h2>
                            </div>
                        </div>
                    ))}


                    {/* <div className="property__list__item">
                        <img
                            src={apartment}
                            alt=""
                            className="property__listImg"
                        />
                        <div className="property__list__titles">
                            <h1>Apartments</h1>
                            <h2>233 Hotels</h2>
                        </div>
                    </div>

                    <div className="property__list__item">
                        <img
                            src={resort}
                            alt=""
                            className="property__listImg"
                        />
                        <div className="property__list__titles">
                            <h1>Resorts</h1>
                            <h2>233 Hotels</h2>
                        </div>
                    </div>

                    <div className="property__list__item">
                        <img
                            src={villa}
                            alt=""
                            className="property__listImg"
                        />
                        <div className="property__list__titles">
                            <h1>Villas</h1>
                            <h2>233 Hotels</h2>
                        </div>
                    </div>

                    <div className="property__list__item">
                        <img
                            src={cabin}
                            alt=""
                            className="property__listImg"
                        />
                        <div className="property__list__titles">
                            <h1>Cabins</h1>
                            <h2>233 Hotels</h2>
                        </div>
                    </div> */}
                </>
            }
        </div>
    );
}

export default PropertyList;