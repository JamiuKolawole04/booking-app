import hotel from "../../asset/hotel1.jpg";

const SearchItem = () => {
    return (
        <div className="search__item d-flex justify-content-between">
            <img
                src={hotel}
                alt=""
            />
            <div className="search__item__desc d-flex column ">
                <h1>Tower Street Apartments</h1>
                <span className="search__item__distance">500m from center</span>
                <span className="search__item__taxi">Free airport taxi</span>
                <span className="search__item__subTitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="search__item__features">
                    Entire studio &bull; 1 bathroom &bull; 21m&sup2; 1 full bed
                </span>
                <span className="search__item__cancel">Free cancellation</span>
                <span className="search__item__cancelSubTitle">
                    You can cancel later, so lock in this great price today
                </span>
            </div>

            <div className="search__item__details d-flex column justify-content-between">
                <div className="search__item__rating d-flex justify-content-between">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="search__item__detailTexts d-flex column">
                    <span className="search__itemPrice">$123</span>
                    <span className="search__item__tax">Includes taxes and fees</span>
                    <button className="search__itemBtn">See availability</button>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;