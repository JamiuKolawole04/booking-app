import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

import Navbar from "../../Navbar";
import Header from "../../Header";
import SearchItem from "../../SearchItem";
import useFetch from "../../../hooks/useFetch";


const List = () => {

    const location = useLocation();

    const [destination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options] = useState(location.state.options);
    const [openDate, setOpenDate] = useState(false)
    const [min, setMin] = useState(undefined)
    const [max, setMax] = useState(undefined)

    const { data, loading, reFetch } = useFetch(`/hotels?city=${destination.toLowerCase()}&min=${min || 0}&max=${max || 999}`);
    const handleClick = () => {
        reFetch();
    }

    return (
        <>
            <Navbar />
            <Header type="list" />
            <div className="list__container d-flex justify-content-center">
                <div className="list__wrapper d-flex">
                    <div className="list__search">
                        <h1 className="list__title">Search</h1>
                        <div className="list__item">
                            <label htmlFor="">Destination</label>
                            <input type="text" name="" placeholder={destination} />
                        </div>
                        <div className="list__item d-flex column">
                            <label htmlFor="">Check-in Date</label>
                            <span
                                onClick={() => setOpenDate(!openDate)}
                                className="d-flex align-items-center">
                                {`${format(
                                    date[0].startDate,
                                    "MM/dd/yyyy")} 
                                   to ${format(date[0].endDate, "MM/dd/yyyy")}`
                                }
                            </span>
                            {openDate &&
                                <DateRange
                                    onChange={item => setDate([item.selection])}
                                    ranges={date}
                                    minDate={new Date()}
                                />
                            }
                        </div>
                        <div className="list__item d-flex column">
                            <label htmlFor="options">Options</label>
                            <div className="list__options">

                                <div className="list__option__item d-flex justify-content-between">
                                    <span className="list__option__text">
                                        Min price <small>per night</small>
                                    </span>
                                    <input
                                        type="number"
                                        onChange={({ target }) => setMin(target.value)}
                                        className="list__option__input"
                                    />
                                </div>

                                <div className="list__option__item d-flex justify-content-between">
                                    <span className="list__option__text">
                                        Max price <small>per night</small>
                                    </span>
                                    <input
                                        type="number"
                                        onChange={({ target }) => setMax(target.value)}
                                        className="list__option__input"
                                    />
                                </div>

                                <div className="list__option__item d-flex justify-content-between">
                                    <span className="list__option__text">
                                        Adult
                                    </span>
                                    <input
                                        type="number"
                                        className="list__option__input"
                                        min={1}
                                        placeholder={options.adults}
                                    />
                                </div>

                                <div className="list__option__item d-flex justify-content-between">
                                    <span className="list__option__text">
                                        Children
                                    </span>
                                    <input
                                        type="number"
                                        className="list__option__input"
                                        placeholder={options.children}
                                        min={0}
                                    />
                                </div>

                                <div className="list__option__item d-flex justify-content-between">
                                    <span className="list__option__text">
                                        Room
                                    </span>
                                    <input
                                        type="number"
                                        className="list__option__input"
                                        placeholder={options.room}
                                        min={1}
                                    />
                                </div>
                            </div>

                        </div>
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className="list__result">
                        {loading ? "loading" :
                            <>
                                {data.hotels.map((item) => (
                                    <SearchItem
                                        item={item}
                                        key={item._id}
                                    />
                                ))}
                            </>

                        }

                    </div>
                </div>
            </div>
        </>
    );
}

export default List; 