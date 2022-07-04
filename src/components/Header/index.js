import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import { searchContext } from "../../context/searchContext";
import { authContext } from "../../context/authContext";

const Header = ({ type }) => {
    const navigate = useNavigate();
    const { dispatch } = useContext(searchContext);
    const { user } = useContext(authContext);

    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adults: 1,
        children: 0,
        room: 1,
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            };
        });
    };


    const handleSearch = () => {
        dispatch({
            type: "NEW_SEARCH",
            payload: {
                destination,
                date,
                options
            }
        })
        navigate("/hotels", { state: { destination, date, options } });
    }


    return (
        <div className="header d-flex justify-content-center">
            <div className={type === "list" ? "header__container list__mode" : "header__container"}>
                <div className="header__list d-flex">
                    <div className="header__list__item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="header__list__item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="header__list__item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="header__list__item">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="header__list__item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airpot taxis</span>
                    </div>
                </div>

                {type !== "list" &&
                    <>
                        <h1 className="header__title">A lifetime of discount? It's Genius.</h1>
                        <p className="header__desc">Get rewarded for your travels - unlock instant savings of 10% or more with a free Zendbooking account</p>
                        {!user &&
                            <button className="header__btn">Sign in / Register </button>}

                        <div className="header__search d-flex align-items-center justify-content-around">
                            <div className="header__search__item d-flex align-items-center">
                                <FontAwesomeIcon icon={faBed} className="header__icon" />
                                <input
                                    type="text"
                                    name=""
                                    className="header__search__input"
                                    placeholder="where are you going?"
                                    value={destination}
                                    onChange={({ target }) => setDestination(target.value)}
                                />
                            </div>
                            <div className="header__search__item d-flex align-items-center ">
                                <FontAwesomeIcon icon={faCalendarDays} className="header__icon" />
                                <span onClick={() => setOpenDate(!openDate)} className="header__search__text">{`${format(
                                    date[0].startDate,
                                    "MM/dd/yyyy")} 
                            to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                                </span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()}
                                />
                                }

                            </div>
                            <div className="header__search__item d-flex align-items-center">
                                <FontAwesomeIcon icon={faPerson} className="header__icon" />
                                <span
                                    className="header__search__text"
                                    onClick={() => setOpenOptions(!openOptions)}
                                >
                                    {`${options.adults} adult . ${options.children} children . ${options.room} room`}
                                </span>

                                {openOptions &&
                                    <div className="options">
                                        <div className="option__item d-flex justify-content-between">
                                            <span className="option__text">Adult</span>
                                            <div className="option__container d-flex align-items-center">
                                                <button
                                                    disabled={options.adults <= 1}
                                                    className="option__counter__btn"
                                                    onClick={() => handleOption("adults", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className="option__counter__number">{options.adults}</span>
                                                <button
                                                    className="option__counter__btn"
                                                    onClick={() => handleOption("adults", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="option__item d-flex justify-content-between">
                                            <span className="option__text">Children</span>
                                            <div className="option__container d-flex align-items-center">
                                                <button
                                                    disabled={options.children <= 0}
                                                    className="option__counter__btn"
                                                    onClick={() => handleOption("children", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className="option__counter__number">{options.children}</span>
                                                <button
                                                    className="option__counter__btn"
                                                    onClick={() => handleOption("children", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="option__item d-flex justify-content-between">
                                            <span className="option__text">Room</span>
                                            <div className="option__container d-flex align-items-center">
                                                <button
                                                    disabled={options.room <= 1}
                                                    className="option__counter__btn"
                                                    onClick={() => handleOption("room", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className="option__counter__number">{options.room}</span>
                                                <button
                                                    className="option__counter__btn"
                                                    onClick={() => handleOption("room", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                }

                            </div>
                            <div className="header__search__item d-flex align-items-center">
                                <button className="header__btn" onClick={handleSearch}>Search </button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Header;