import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../../Navbar";
import Header from "../../Header";
import MailList from "../../MailList";
import Footer from "../../Footer";
// import hotel1 from "../../../asset/hotel1.jpg";
// import hotel2 from "../../../asset/hotel2.jpg";
// import hotel3 from "../../../asset/hotel3.jpg";
// import hotel4 from "../../../asset/hotel4.jpg";
// import hotel5 from "../../../asset/hotel5.jpg";
// import hotel6 from "../../../asset/hotel6.jpg";
import useFetch from "../../../hooks/useFetch";
import { searchContext } from "../../../context/searchContext";
import { authContext } from "../../../context/authContext";
import Reserve from "../../Reserver";


const Hotel = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(authContext);
    const { date, options } = useContext(searchContext);

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const { data, loading, setCallback } = useFetch(`/hotels/${id}`)


    // let photos = [
    //     {
    //         src: hotel1
    //     },
    //     {
    //         src: hotel2
    //     },
    //     {
    //         src: hotel3
    //     },
    //     {
    //         src: hotel4
    //     },
    //     {
    //         src: hotel5
    //     },
    //     {
    //         src: hotel6
    //     },
    // ]
    const MILLISECCONDS_PER_DAY = 1000 * 60 * 60 * 24;

    const dayDifference = (date1, date2) => {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECCONDS_PER_DAY);
        return diffDays;
    }
    const days = (dayDifference(date[0].endDate, date[0].startDate));


    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true)
    }

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
        }

        setSlideNumber(newSlideNumber);
    }

    const handleClick = () => {
        if (user) {
            setOpenModal(true);
            setCallback(false)

        } else {
            navigate("/login");
        }

    }


    return (
        <div>
            <Navbar />
            <Header type="list" />

            {loading ? "loading..." :
                <div className="hotel__container d-flex align-items-center column">
                    {
                        open &&
                        <div className="slider d-flex align-items-center">
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                                className="close"
                                onClick={() => setOpen(false)}
                            />
                            <FontAwesomeIcon
                                icon={faCircleArrowLeft}
                                className="arrow"
                                onClick={() => handleMove("l")}
                            />
                            <div className="slider__wrapper d-flex align-items-center justify-content-center">
                                <img
                                    className="sliderImg"
                                    // src={photos[slideNumber].src}
                                    src={data.hotel.photos[slideNumber]}
                                    alt="slider_img"
                                />
                            </div>
                            <FontAwesomeIcon
                                icon={faCircleArrowRight}
                                className="arrow"
                                onClick={() => handleMove("r")}
                            />
                        </div>
                    }

                    <div className="hotel__wrapper d-flex column">
                        <button className="booknow__btn">Reserve or Book Now!</button>
                        <h1 className="hotel__title">{data.hotel.name}</h1>
                        <div className="hotel__address d-flex align-items-center">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{data.hotel.address}</span>
                        </div>
                        <span className="hotel__distance">
                            Excellent location - {data.hotel.distance}m from center
                        </span>
                        <span className="hotel__pricingHighLight">
                            Book a stay over ${data.hotel.cheapestPrice} at this property and get a free airport taxi
                        </span>
                        <div className="hotel__images d-flex justify-content-between">
                            {
                                data.hotel.photos.map((photo, i) => (
                                    <div className="hotelImg__wrapper" key={i}>
                                        <img
                                            onClick={() => handleOpen(i)}
                                            src={photo}
                                            className="hotelImg"
                                            alt="prod_img"
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="hotel__details d-flex justify-content-between">
                            <div className="hotel__details__texts">
                                <h1>{data.hotel.title}</h1>
                                <p>
                                    {/* Located 5-minute walk from St.Florian's Gate in Krakow, Tower Street Apartments has accomodations with air conditioning and free
                                    Wifi. The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat-screen Tv, ad a private
                                    bathroom with shower and a hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machine. Popular points of
                                    interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower. The nearest airport is John Paul II international
                                    Krakow-Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service. */}
                                    {data.hotel.desc}
                                </p>
                            </div>
                            <div className="hotel__details__price d-flex column">
                                <h1>Perfect for a {days}-night stay</h1>
                                <span>
                                    Located in the real heart of Krakow, this property has an excellent location store of 9.8!
                                </span>
                                <h2>
                                    <strong>${days * data.hotel.cheapestPrice * options.room}</strong> ({days} nights)
                                </h2>
                                <button onClick={handleClick} >Reserve or Book Now!</button>
                            </div>
                        </div>
                    </div>

                    <MailList />
                    <Footer />

                </div>
            }
            {openModal &&
                <Reserve
                    setOpen={setOpenModal}
                    hotelId={id}
                    callback={setCallback}
                />
            }
        </div>
    );
}

export default Hotel;