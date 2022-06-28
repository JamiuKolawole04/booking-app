import ft_img1 from "../../asset/featured_img1.webp";

const FeaturedProperties = () => {
    return (
        <div className="ft__properties d-flex justify-content-between">
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
            </div>
        </div>

    );
}

export default FeaturedProperties;