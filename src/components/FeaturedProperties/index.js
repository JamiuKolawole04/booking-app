import useFetch from "../../hooks/useFetch";
// import ft_img1 from "../../asset/featured_img1.webp";

const FeaturedProperties = () => {
    const { data, loading } = useFetch("/hotels?featured=true&limit=4");

    return (
        <div className="ft__properties d-flex justify-content-between">
            {loading ? "Loading" :
                <>
                    {
                        data.hotels.map((item) => (
                            <div className="ft__properties__item d-flex column" key={item._id}>
                                <img
                                    src={item.photos[0]}
                                    alt="hotel_img"
                                />
                                <span className="ft__property__name">{item.name}</span>
                                <span className="ft__property__city">{item.city}</span>
                                <span className="ft__property__price">Starting from {item.cheapestPrice}</span>
                                {item.rating &&
                                    <div className="ft__property__rating">
                                        <button>{item.rating}</button>
                                        <span>Excellent</span>
                                    </div>
                                }

                            </div>
                        ))
                    }
                </>

            }


            {/* <div className="ft__properties__item d-flex column">
                <img
                    src={ft_img1}
                    alt=""
                />
                <span className="ft__property__name">Aparthotel Stare Miasto</span>
                <span className="ft__property__city">Madrid</span>
                <span className="ft__property__price">Starting from $120</span>
                <div className="ft__property__rating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className="ft__properties__item d-flex column">
                <img
                    src={ft_img1}
                    alt=""
                />
                <span className="ft__property__name">Aparthotel Stare Miasto</span>
                <span className="ft__property__city">Madrid</span>
                <span className="ft__property__price">Starting from $120</span>
                <div className="ft__property__rating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className="ft__properties__item d-flex column">
                <img
                    src={ft_img1}
                    alt=""
                />
                <span className="ft__property__name">Aparthotel Stare Miasto</span>
                <span className="ft__property__city">Madrid</span>
                <span className="ft__property__price">Starting from $120</span>
                <div className="ft__property__rating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div> */}
        </div>

    );
}

export default FeaturedProperties;