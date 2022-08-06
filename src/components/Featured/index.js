import useFetch from "../../hooks/useFetch";
import dublin from "../../asset/dublin.webp";
import austin from "../../asset/austin.webp";
import reno from "../../asset/reno.webp";

const Featured = () => {

    const { data, loading } = useFetch("/hotels/countByCity?cities=berlin,london,madrid");
    // console.log({ data, loading });

    return (
        <div className="featured d-flex justify-content-between">
            {loading ? ("Loading please wait") :
                <>
                    <div className="featured__item">
                        <img
                            src={dublin}
                            className="featuredImg"
                            alt=""
                        />
                        <div className="featured__titles">
                            <h1>Berlin</h1>
                            <h2>{data.list[0]} properties</h2>
                        </div>
                    </div>
                    <div className="featured__item">
                        <img
                            src={austin}
                            className="featuredImg"
                            alt=""
                        />
                        <div className="featured__titles">
                            <h1>London</h1>
                            <h2>{data.list[1]} properties</h2>
                        </div>
                    </div>
                    <div className="featured__item">
                        <img
                            src={reno}
                            className="featuredImg"
                            alt=""
                        />
                        <div className="featured__titles">
                            <h1>Madrid</h1>
                            <h2>{data.list[2]} properties</h2>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Featured;