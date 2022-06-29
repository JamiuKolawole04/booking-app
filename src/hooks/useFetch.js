import { useState, useEffect } from "react";

import axios from "../utils/axios"

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios({
                    method: "get",
                    url: url
                });
                setData(data)

            } catch (err) {
                // setError here
                alert(err)
            }
            setLoading(false)
        }

        fetchData();

    }, [url]);

    const reFetch = async () => {
        setLoading(true);

        try {
            const { data } = await axios({
                method: "get",
                url: url
            });
            setData(data)


        } catch (err) {
            alert(err)
        }
        setLoading(false)
    }

    return { data, loading, error, reFetch };
}

export default useFetch;