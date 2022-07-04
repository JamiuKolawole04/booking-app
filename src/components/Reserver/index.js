import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


import useFetch from "../../hooks/useFetch";
import { searchContext } from "../../context/searchContext";
import axios from "../../utils/axios";

const Reserve = ({ setOpen, hotelId }) => {
    const navigate = useNavigate();
    const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
    const [selectedRooms, setSelectedRooms] = useState([]);
    const { date } = useContext(searchContext);

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
            checked ? [...selectedRooms, value] : selectedRooms.filter((item) => item !== value)
        );
    }

    const getDateInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());

        let list = [];

        while (date <= end) {
            list.push(new Date(date));
            date.setDate(date.getDate() + 1)
        }
        return list;
    }

    const allDates = (getDateInRange(date[0].startDate, date[0].endDate));
    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
            // if it includes, it returns true
            //  true === not available
            allDates.includes(new Date(date).getTime())

        );

        return !isFound;
        // const isFound = roomNumber.unavailableDates.some((date) => {
        //     if (date.includes(allDates)) {
        //         return true
        //     } else {
        //         return false
        //     }
        // })
        // console.log(isFound);
    }


    const handleClick = async () => {
        try {
            await Promise.all(selectedRooms.map((roomId) => {
                const { data } = axios({
                    url: `/rooms/availability/${roomId}`,
                    data: {
                        date: allDates
                    },
                    method: "put",

                });
                return data;
            }));
            setOpen(false);
            navigate("/");
        } catch (err) {

        }
    }


    return (
        <div className="reserve d-flex align-items-center justify-content-center">
            <div className="reserve__container">
                <FontAwesomeIcon
                    className="reserve__close"
                    onClick={() => setOpen(false)}
                    icon={faCircleXmark}
                />
                <span>Select your rooms: </span>
                {loading ? "loading" :
                    data.list.map((item) => (
                        <div className="reserve__item d-flex align-items-center" key={item._id}>
                            <div className="reserveItem__info d-flex column">
                                <div className="reserveItem__title">{item.title}</div>
                                <div className="reserveItem__desc">{item.desc}</div>
                                <div className="reserveItem__max">Max people: <strong>{item.maxPeople}</strong></div>
                                <div className="reserveItem__price">{item.price}</div>
                            </div>
                            <div className="selectRooms d-flex">
                                <div className="room">
                                    {item.roomNumbers.map((roomNumber, i) => (
                                        <div className="room d-flex column" key={roomNumber._id}>
                                            <label htmlFor="">{roomNumber.number}</label>
                                            <input
                                                type="checkbox"
                                                name="" id=""
                                                value={roomNumber._id}
                                                onChange={handleSelect}
                                                disabled={isAvailable(roomNumber)}
                                            // onClick={!isAvailable(roomNumber)}
                                            />
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                <button
                    className="reserve__btn"
                    onClick={handleClick}
                >
                    Reserve now!
                </button>
            </div>
        </div>
    );
}

export default Reserve