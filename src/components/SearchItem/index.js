import { Link } from "react-router-dom";

import hotel from "../../asset/hotel1.jpg";

const SearchItem = ({ item }) => {
    return (
        <div className="search__item d-flex justify-content-between">
            <img
                // hotel === default img
                src={item.photos[0]}
                alt=""
            />
            <div className="search__item__desc d-flex column ">
                <h1>{item.name}</h1>
                <span className="search__item__distance">{item.distance}m from center</span>
                <span className="search__item__taxi">Free airport taxi</span>
                <span className="search__item__subTitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="search__item__features">
                    {/* Entire studio &bull; 1 bathroom &bull; 21m&sup2; 1 full bed */}
                    {item.desc}
                </span>
                <span className="search__item__cancel">Free cancellation</span>
                <span className="search__item__cancelSubTitle">
                    You can cancel later, so lock in this great price today
                </span>
            </div>

            <div className="search__item__details d-flex column justify-content-between">
                {item.rating &&
                    <div className="search__item__rating d-flex justify-content-between">
                        <span>Excellent</span>
                        <button>{item.rating}</button>
                    </div>
                }

                <div className="search__item__detailTexts d-flex column">
                    <span className="search__itemPrice">${item.cheapestPrice}</span>
                    <span className="search__item__tax">Includes taxes and fees</span>
                    < Link to={`/hotels/${item._id}`}>
                        <button className="search__itemBtn">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;